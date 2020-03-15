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
    return this.schedules.list().filter((nonEmpty) => nonEmpty)
  }
}
