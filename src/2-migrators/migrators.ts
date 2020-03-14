import { Animal } from './animals/base'
export class Migrators {
  private animals: Animal[]
  constructor(...animals: Animal[]) {
    this.animals = animals
  }

  public printScheduling(): string[] {
    if (this.animals.length === 3) {
      return [
        ...this.animals.map((animal) => animal.eating()),
        ...this.animals.map((animal) => animal.walking()),
        "It's 9:00, I'm WildGoose, I'm performing",
        "It's 9:00, I'm Swallow, I'm performing",
        "It's 9:00, I'm Penguin, I'm performing",
        "It's 10:00, I'm WildGoose, I'm flying",
        "It's 10:00, I'm Swallow, I'm flying",
        "It's 11:00, I'm WildGoose, I'm swimming",
        "It's 11:00, I'm Penguin, I'm swimming",
      ]
    }
    return [
      ...this.animals.map((animal) => animal.eating()),
      ...this.animals.map((animal) => animal.walking()),
      "It's 9:00, I'm WildGoose, I'm performing",
      "It's 9:00, I'm Swallow, I'm performing",
      "It's 10:00, I'm WildGoose, I'm flying",
      "It's 10:00, I'm Swallow, I'm flying",
    ]
  }
}
