export class Calculator {
  calculate(products: any[]) {
    return products.reduce(
      (result, product) =>
        result +
        product.price *
          product.quantity *
          (product.category === 'drink' ? 0.8 : 1),
      0
    )
  }
}
