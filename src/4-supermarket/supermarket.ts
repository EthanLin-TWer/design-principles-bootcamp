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
    return 1
  }

  private cashBack(products) {
    // for meat
    const meats = products.filter(
      ({ category, name }) => category === 'meat' && name !== 'pork'
    )
    const totalPrice = this.calculateTotalPrice(meats)

    // for drink

    let promotion = 0
    if (totalPrice >= 20) {
      promotion += 2
    }

    if (totalPrice >= 60) {
      promotion += 6
    }

    return promotion
  }
}
