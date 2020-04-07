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
    const meats = products.filter(({ category }) => category === 'meat')
    const totalPrice = this.calculateTotalPrice(meats)

    if (products.some(({ category }) => category === 'meat')) {
      return 2
    }

    return 0
  }
}
