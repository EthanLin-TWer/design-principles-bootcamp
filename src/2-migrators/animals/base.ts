import { Schedule } from '../schedules/base'

export abstract class Bird {
  private readonly _schedules: Schedule[]
  protected constructor(schedules: Schedule[] = []) {
    this._schedules = [
      new Schedule(this.getName(), 7, `eating`),
      new Schedule(this.getName(), 8, `walking`),
      new Schedule(this.getName(), 9, `performing`),
    ].concat(schedules)
  }

  getSchedules(): Schedule[] {
    return this._schedules
  }

  abstract getName(): string
}
