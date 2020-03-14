import { Schedule } from '../schedules/base'

export abstract class Animal {
  abstract getName(): string

  public eating(): string {
    return new Schedule(this.getName(), 7, `eating`).toString()
  }

  public walking(): string {
    return new Schedule(this.getName(), 8, `walking`).toString()
  }

  public performing(): string {
    return new Schedule(this.getName(), 9, `performing`).toString()
  }

  public flying(): string {
    return new Schedule(this.getName(), 10, `flying`).toString()
  }

  public swimming(): string {
    return new Schedule(this.getName(), 11, `swimming`).toString()
  }

  public programming(): string {
    return new Schedule(this.getName(), 13, `programming`).toString()
  }

  public building(): string {
    return new Schedule(this.getName(), 14, `building a house`).toString()
  }
}
