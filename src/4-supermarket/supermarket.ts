export class Calculator {
  calculate(products: any[]) {
    return products.reduce(
      (result, product) =>
        result + product.price * product.quantity * this.discount(product),
      0
    )
  }

  private discount({ category }) {
    return category === 'drink' ? 0.8 : 1
  }
}
