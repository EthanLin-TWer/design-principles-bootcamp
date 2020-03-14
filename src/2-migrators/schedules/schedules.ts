import { Schedule } from './base'

export class Schedules {
  private schedules: Schedule[]
  constructor(schedules: Schedule[]) {
    this.schedules = schedules
  }

  list(): string[] {
    return this.schedules.map((schedule) => schedule.print())
  }
}
