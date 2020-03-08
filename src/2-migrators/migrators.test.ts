import { Migrators } from './migrators'

describe('Migrators', () => {
  it('should return scheduling of swans and swallows', () => {
    const result: string[] = new Migrators().main()
    expect(result).toEqual([
      "It's 7:00, I'm WildGoose, I'm eating",
      "It's 7:00, I'm Swallow, I'm eating",
      "It's 8:00, I'm WildGoose, I'm walking",
      "It's 8:00, I'm Swallow, I'm walking",
      "It's 9:00, I'm WildGoose, I'm performing",
      "It's 9:00, I'm Swallow, I'm performing",
      "It's 10:00, I'm WildGoose, I'm flying",
      "It's 10:00, I'm Swallow, I'm flying",
    ])
  })
})
