import flatMap from 'lodash/flatMap'

import { Bird } from './animals/base'
import { Schedules } from './schedules/schedules'

export class Migrators {
  private schedules: Schedules

  constructor(...animals: Bird[]) {
    this.schedules = new Schedules(
      flatMap(animals, (animal) => animal.getSchedules())
    )
  }

  public printScheduling(): string[] {
    return this.schedules.list()
  }
}
