export class Calculator {
  calculate(products: any[]) {
    return this.calculateTotalPrice(products) - this.cashBack(products)
  }

  private calculateTotalPrice(products: any[]) {
    return products.reduce((result, product) => {
      const totalPrice = product.price * product.quantity
      return result + totalPrice * this.discount(product)
    }, 0)
  }

  private discount({ category }) {
    return category === 'electronics' ? 0.8 : 1
  }

  private cashBack(products) {
    let promotion = 0

    // for meat
    const meats = products.filter(
      ({ category, name }) => category === 'meat' && name !== 'pork'
    )
    const totalPrice = this.calculateTotalPrice(meats)

    // for drink
    if (products.filter(({ category }) => category === 'drink')) {
      const drinks = products.filter(({ category }) => category === 'drink')
      drinks.forEach((drink) => {
        const ofSameKinds = drinks.filter(({ name }) => drink.name === name)
        if (
          ofSameKinds.reduce((result, one) => result + one.quantity, 0) >= 2
        ) {
          promotion += drink.price * 0.5
        }
      })
    }

    if (totalPrice >= 20) {
      promotion += 2
    }

    if (totalPrice >= 60) {
      promotion += 6
    }

    return promotion
  }
}
