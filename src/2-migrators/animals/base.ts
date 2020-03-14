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

  public flying(): string {
    return new Schedule(this.getName(), 10, `flying`).print()
  }

  public swimming(): string {
    return new Schedule(this.getName(), 11, `swimming`).print()
  }

  public programming(): string {
    return new Schedule(this.getName(), 13, `programming`).print()
  }

  public building(): string {
    return new Schedule(this.getName(), 14, `building a house`).print()
  }
}
