import { Schedule } from './base'

export class Schedules {
  private schedules: Schedule[]
  constructor(schedules: Schedule[]) {
    this.schedules = schedules
  }

  list(): string[] {
    return this.schedules
      .sort((schedule, another) => (schedule.isBefore(another) ? -1 : 1))
      .map((schedule) => schedule.print())
  }
}
