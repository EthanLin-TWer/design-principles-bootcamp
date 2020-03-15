import { Bird } from './animals/base'
import { Schedules } from './schedules/schedules'

export class Migrators {
  private animals: Bird[]
  private schedules: Schedules

  constructor(...animals: Bird[]) {
    this.animals = animals
    this.schedules = new Schedules(
      this.animals
        .map((animal) => animal.getSchedules())
        .reduce((result, next) => result.concat(next), [])
    )
  }

  public printScheduling(): string[] {
    return this.schedules.list()
  }
}
