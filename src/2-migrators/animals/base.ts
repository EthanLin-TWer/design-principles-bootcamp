import { Schedule } from '../schedules/base'

export abstract class Bird {
  private readonly _schedules: Schedule[]
  protected constructor(schedules: Schedule[] = []) {
    const basicSchedules = [
      new Schedule(this.getName(), 7, `eating`),
      new Schedule(this.getName(), 8, `walking`),
      new Schedule(this.getName(), 9, `performing`),
    ]

    this._schedules = basicSchedules.concat(schedules)
  }

  getSchedules(): Schedule[] {
    return this._schedules
  }

  abstract getName(): string
}
