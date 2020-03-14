import { Animal } from './animals/base'
export class Migrators {
  private animals: Animal[]
  constructor(...animals: Animal[]) {
    this.animals = animals
  }

  public printScheduling(): string[] {
    return [
      ...this.animals.map((animal) => animal.eating()),
      ...this.animals.map((animal) => animal.walking()),
      ...this.animals.map((animal) => animal.performing()),
      ...this.animals.map((animal) => animal.flying()),
      ...this.animals.map((animal) => animal.swimming()),
      "It's 13:00, I'm WildGoose, I'm programming",
      "It's 13:00, I'm Swallow, I'm programming",
    ].filter((nonEmpty) => nonEmpty)
  }
}
