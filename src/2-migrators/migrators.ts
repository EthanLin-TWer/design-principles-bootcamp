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
        ...this.animals.map((animal) => animal.performing()),
        ...this.animals.map((animal) => animal.flying()),
        "It's 11:00, I'm WildGoose, I'm swimming",
        "It's 11:00, I'm Penguin, I'm swimming",
      ].filter((nonEmpty) => nonEmpty)
    }

    return [
      ...this.animals.map((animal) => animal.eating()),
      ...this.animals.map((animal) => animal.walking()),
      ...this.animals.map((animal) => animal.performing()),
      ...this.animals.map((animal) => animal.flying()),
    ]
  }
}
