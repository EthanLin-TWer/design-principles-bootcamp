export class Calculator {
  calculate(products: any[]) {
    const totalPrice = products.reduce(
      (result, product) => result + product.price * product.quantity,
      0
    )

    return totalPrice
  }
}
