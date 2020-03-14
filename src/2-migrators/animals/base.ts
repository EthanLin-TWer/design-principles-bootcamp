import { Schedule } from '../schedules/base'

export abstract class Animal {
  abstract getName(): string

  public eating(): string {
    return new Schedule(this.getName(), 7, `eating`).toString()
  }

  public walking(): string {
    return `It's 8:00, I'm ${this.getName()}, I'm walking`
  }

  public performing(): string {
    return `It's 9:00, I'm ${this.getName()}, I'm performing`
  }

  public flying(): string {
    return `It's 10:00, I'm ${this.getName()}, I'm flying`
  }

  public swimming(): string {
    return `It's 11:00, I'm ${this.getName()}, I'm swimming`
  }

  public programming(): string {
    return `It's 13:00, I'm ${this.getName()}, I'm programming`
  }

  public building(): string {
    return `It's 14:00, I'm ${this.getName()}, I'm building a house`
  }
}
