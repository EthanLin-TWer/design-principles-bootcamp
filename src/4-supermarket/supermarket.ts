export class Calculator {
  calculate(products: any[]) {
    const totalPrice = products.reduce(
      (result, product) => result + product.price * product.quantity,
      0
    )

    const discount = totalPrice > 100 ? 15 : totalPrice > 50 ? 5 : 0
    return totalPrice - discount
  }
}
