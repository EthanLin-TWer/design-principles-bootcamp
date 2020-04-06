export class Calculator {
  calculate(products: any[]) {
    const DISCOUNT = 0.8
    const totalPrice = products.reduce(
      (result, product) => result + product.price * product.quantity,
      0
    )

    return totalPrice * DISCOUNT
  }
}
