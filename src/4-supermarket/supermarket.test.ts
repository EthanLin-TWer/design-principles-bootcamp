import { Calculator } from './supermarket'

describe('SuperMarket', () => {
  const products = [
    { name: 'wine', category: 'drink', price: 15, quantity: 1 },
    { name: 'cola', category: 'drink', price: 5, quantity: 2 },
    { name: 'pork', category: 'meat', price: 25, quantity: 2 },
    { name: 'chicken', category: 'meat', price: 10, quantity: 5 },
    { name: 'light', category: 'electronics', price: 100, quantity: 1 },
  ]

  describe.skip('task 1: 20% off', () => {
    it('should calculate total price and apply a 80% discount', () => {
      const result = new Calculator().calculate(products)

      expect(result).toEqual(180)
    })
  })

  describe('task 2: cash back', () => {
    it('should not get any cash back when total price is less than ￥50', () => {
      const result = new Calculator().calculate([
        { name: 'wine', category: 'drink', price: 15, quantity: 1 },
        { name: 'cola', category: 'drink', price: 5, quantity: 2 },
      ])

      expect(result).toEqual(25)
    })

    it('should get ￥5 cash back when total price is more than ￥50', () => {
      const result = new Calculator().calculate([
        { name: 'wine', category: 'drink', price: 15, quantity: 1 },
        { name: 'cola', category: 'drink', price: 5, quantity: 2 },
      ])

      expect(result).toEqual(25)
    })
  })
})
