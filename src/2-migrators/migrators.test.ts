import { Migrators } from './migrators'
import { WildGoose } from './animals/WildGoose'
import { Swallow } from './animals/Penguin'
import { Penguin } from './animals/Swallow'

describe('Migrators', () => {
  it('should return scheduling of wild goose and swallows', () => {
    const result: string[] = new Migrators(
      new WildGoose(),
      new Swallow()
    ).printScheduling()

    expect(result).toEqual([
      "It's 7:00, I'm WildGoose, I'm eating",
      "It's 7:00, I'm Swallow, I'm eating",
      "It's 8:00, I'm WildGoose, I'm walking",
      "It's 8:00, I'm Swallow, I'm walking",
      "It's 9:00, I'm WildGoose, I'm performing",
      "It's 9:00, I'm Swallow, I'm performing",
      "It's 10:00, I'm WildGoose, I'm flying",
      "It's 10:00, I'm Swallow, I'm flying",
      "It's 11:00, I'm WildGoose, I'm swimming",
    ])
  })

  it('should return scheduling of wild goose, swallows and penguins', () => {
    const result: string[] = new Migrators(
      new WildGoose(),
      new Swallow(),
      new Penguin()
    ).printScheduling()

    expect(result).toEqual([
      "It's 7:00, I'm WildGoose, I'm eating",
      "It's 7:00, I'm Swallow, I'm eating",
      "It's 7:00, I'm Penguin, I'm eating",
      "It's 8:00, I'm WildGoose, I'm walking",
      "It's 8:00, I'm Swallow, I'm walking",
      "It's 8:00, I'm Penguin, I'm walking",
      "It's 9:00, I'm WildGoose, I'm performing",
      "It's 9:00, I'm Swallow, I'm performing",
      "It's 9:00, I'm Penguin, I'm performing",
      "It's 10:00, I'm WildGoose, I'm flying",
      "It's 10:00, I'm Swallow, I'm flying",
      "It's 11:00, I'm WildGoose, I'm swimming",
      "It's 11:00, I'm Penguin, I'm swimming",
    ])
  })
})
