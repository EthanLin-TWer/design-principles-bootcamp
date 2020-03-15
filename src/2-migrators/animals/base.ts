import { Schedule } from '../schedules/base'

export abstract class Animal {
  private readonly _schedules: Schedule[]
  constructor(schedules: Schedule[] = []) {
    this._schedules = schedules
  }

  getSchedules(): Schedule[] {
    return this._schedules
  }

  abstract getName(): string

  public eating(): string {
    return new Schedule(this.getName(), 7, `eating`).print()
  }

  public walking(): string {
    return new Schedule(this.getName(), 8, `walking`).print()
  }

  public performing(): string {
    return new Schedule(this.getName(), 9, `performing`).print()
  }
}
