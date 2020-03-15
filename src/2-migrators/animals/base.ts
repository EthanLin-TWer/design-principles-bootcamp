import { Schedule } from '../schedules/base'

export abstract class Animal {
  private readonly _schedules: Schedule[]
  constructor(schedules: Schedule[] = []) {
    this._schedules = [
      new Schedule(this.getName(), 8, `walking`),
      new Schedule(this.getName(), 9, `performing`),
    ].concat(schedules)
  }

  getSchedules(): Schedule[] {
    return this._schedules
  }

  abstract getName(): string

  public eating(): string {
    return new Schedule(this.getName(), 7, `eating`).print()
  }
}
