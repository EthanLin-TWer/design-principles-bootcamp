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

  describe.skip('task 2: cash back', () => {
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
        { name: 'pork', category: 'meat', price: 25, quantity: 2 },
      ])

      expect(result).toEqual(65 - 5)
    })

    it('should get ￥15 cash back when total price is more than ￥100', () => {
      const result = new Calculator().calculate([
        { name: 'wine', category: 'drink', price: 15, quantity: 1 },
        { name: 'cola', category: 'drink', price: 5, quantity: 2 },
        { name: 'pork', category: 'meat', price: 25, quantity: 2 },
        { name: 'chicken', category: 'meat', price: 10, quantity: 5 },
      ])

      expect(result).toEqual(125 - 15)
    })

    it('should get at most ￥15 cash back', () => {
      const result = new Calculator().calculate(products)

      expect(result).toEqual(225 - 15)
    })
  })

  describe('task 3: 20% off for drink only', () => {
    it('should get 20% off for drink', () => {
      const result = new Calculator().calculate([
        { name: 'cola', category: 'drink', price: 5, quantity: 2 },
      ])

      expect(result).toEqual(10 * 0.8)
    })

    it('should get 20% off for all drinks when you buy multiple drinks', () => {
      const result = new Calculator().calculate([
        { name: 'wine', category: 'drink', price: 15, quantity: 1 },
        { name: 'cola', category: 'drink', price: 5, quantity: 2 },
      ])

      expect(result).toEqual(25 * 0.8)
    })

    it('should not get any discount when products other than drinks', () => {
      const result = new Calculator().calculate([
        { name: 'pork', category: 'meat', price: 25, quantity: 2 },
      ])

      expect(result).toEqual(50)
    })

    it('acceptance test according to project', () => {
      const result = new Calculator().calculate(products)

      expect(result).toEqual(225 - 5)
    })
  })
})
