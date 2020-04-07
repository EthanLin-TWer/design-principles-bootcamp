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
    return category === 'drink' ? 0.8 : 1
  }

  private cashBack(products) {
    const meats = products.filter(
      ({ category, name }) => category === 'meat' && name !== 'pork'
    )
    const totalPrice = this.calculateTotalPrice(meats)

    if (totalPrice >= 60) {
      return 8
    }

    if (totalPrice >= 20) {
      return 2
    }

    return 0
  }
}
