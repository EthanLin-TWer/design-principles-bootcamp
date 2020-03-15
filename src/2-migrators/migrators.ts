import { Bird } from './animals/base'
import { Schedules } from './schedules/schedules'
import { Schedule } from './schedules/base'

export class Migrators {
  private schedules: Schedules

  constructor(...animals: Bird[]) {
    this.schedules = new Schedules(
      animals.reduce(
        (result: Schedule[], next: Bird) => result.concat(next.getSchedules()),
        []
      )
    )
  }

  public printScheduling(): string[] {
    return this.schedules.list()
  }
}
