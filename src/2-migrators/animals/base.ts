import { Schedule } from '../schedules/base'
import { Eating } from '../schedules/eating'
import { Walking } from '../schedules/walking'
import { Performing } from '../schedules/performing'

export abstract class Bird {
  private readonly _schedules: Schedule[]
  protected constructor(schedules: Schedule[] = []) {
    const basicSchedules = [
      new Eating(this.getName()),
      new Walking(this.getName()),
      new Performing(this.getName()),
    ]

    this._schedules = basicSchedules.concat(schedules)
  }

  public getSchedules(): Schedule[] {
    return this._schedules
  }

  protected addSchedules(schedules: Schedule[]): void {
    this._schedules.push(...schedules)
  }

  abstract getName(): string
}
