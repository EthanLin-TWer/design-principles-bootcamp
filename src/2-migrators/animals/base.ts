import { Schedule } from '../schedules/base'
import { Eating } from '../schedules/eating'

export abstract class Bird {
  private readonly _schedules: Schedule[]
  protected constructor(schedules: Schedule[] = []) {
    const basicSchedules = [
      new Eating(this.getName()),
      new Schedule(this.getName(), 8, `walking`),
      new Schedule(this.getName(), 9, `performing`),
    ]

    this._schedules = basicSchedules.concat(schedules)
  }
  public getSchedules(): Schedule[] {
    return this._schedules
  }

  abstract getName(): string
}
