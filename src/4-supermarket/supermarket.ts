export class Calculator {
  calculate(products: any[]) {
    const totalPrice = products.reduce(
      (result, product) => result + product.price * product.quantity,
      0
    )

    return totalPrice - this.discount(totalPrice)
  }

  private discount(totalPrice) {
    if (totalPrice > 100) {
      return 15
    }
    return totalPrice > 50 ? 5 : 0
  }
}
