import { Calculator } from './supermarket'

describe('SuperMarket', () => {
  const products = [
    { name: 'wine', category: 'drink', price: 15, quantity: 1 },
    { name: 'cola', category: 'drink', price: 5, quantity: 2 },
    { name: 'pork', category: 'meat', price: 25, quantity: 2 },
    { name: 'chicken', category: 'meat', price: 10, quantity: 5 },
    { name: 'light', category: 'electronics', price: 100, quantity: 1 },
  ]

  describe.skip('task 1: 80% discount', () => {
    it('should calculate total price and apply a 80% discount', () => {
      const result = new Calculator().calculate(products)

      expect(result).toEqual(180)
    })
  })

  describe('task 2: amount reduction', () => {
    it('should reduce ￥5 when total price is more than ￥50', () => {
      const result = new Calculator().calculate([
        { name: 'wine', category: 'drink', price: 15, quantity: 1 },
        { name: 'cola', category: 'drink', price: 5, quantity: 2 },
        { name: 'pork', category: 'meat', price: 25, quantity: 2 },
        { name: 'chicken', category: 'meat', price: 10, quantity: 5 },
        { name: 'light', category: 'electronics', price: 100, quantity: 1 },
      ])

      expect(result).toEqual(180)
    })
  })
})
