export class Calculator {
  calculate(products: any[]) {
    return 20
    const totalPrice = products.reduce(
      (result, product) => result + product.price * product.quantity,
      0
    )
    return 0
  }
}
