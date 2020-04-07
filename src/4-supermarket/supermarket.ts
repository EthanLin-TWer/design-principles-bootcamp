export class Calculator {
  calculate(products: any[]) {
    return (
      products.reduce((result, product) => {
        const totalPrice = product.price * product.quantity
        return result + totalPrice * this.discount(product)
      }, 0) - this.cashBack(products)
    )
  }

  private discount({ category }) {
    return category === 'drink' ? 0.8 : 1
  }

  private cashBack(products) {
    if (products.some(({ category }) => category === 'meat')) {
      return 2
    }
    return 0
  }
}
