import { Animal } from './animals/base'
import { Schedules } from './schedules/schedules'
export class Migrators {
  private animals: Animal[]
  private schedules: Schedules

  constructor(...animals: Animal[]) {
    this.animals = animals
    this.schedules = new Schedules(
      this.animals
        .map((animal) => animal.getSchedules())
        .reduce((result, next) => result.concat(next), [])
    )
  }

  public printScheduling(): string[] {
    return [
      ...this.animals.map((animal) => animal.eating()),
      ...this.animals.map((animal) => animal.walking()),
      ...this.animals.map((animal) => animal.performing()),
      ...this.animals.map((animal) => animal.flying()),
      ...this.schedules.list(),
    ].filter((nonEmpty) => nonEmpty)
  }
}
