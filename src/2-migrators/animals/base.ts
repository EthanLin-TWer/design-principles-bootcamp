import { Schedule } from '../schedules/base'
import { Eating } from '../schedules/eating'
import { Walking } from '../schedules/walking'
import { Performing } from '../schedules/performing'

export abstract class Bird {
  private readonly _schedules: Schedule[]
  protected constructor() {
    this._schedules = [
      new Eating(this.getName()),
      new Walking(this.getName()),
      new Performing(this.getName()),
    ]
  }

  abstract getName(): string

  public getSchedules(): Schedule[] {
    return this._schedules
  }

  protected addSchedules(schedules: Schedule[]): void {
    this._schedules.push(...schedules)
  }
}
