import { Schedule } from './base'

export class Schedules {
  private schedules: Schedule[]

  constructor(schedules: Schedule[]) {
    this.schedules = schedules
  }

  list(): string[] {
    return this.schedules
      .sort(this.byScheduleTimeAscendingly)
      .map((schedule) => schedule.print())
  }

  private byScheduleTimeAscendingly(schedule, another) {
    return schedule.isBefore(another) ? -1 : 1
  }
}
