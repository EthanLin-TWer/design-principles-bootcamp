import { Schedule } from './schedules/base'

export class Schedules {
  private schedules: Schedule[]

  constructor(schedules: Schedule[]) {
    this.schedules = schedules
  }

  public list(): string[] {
    return this.schedules
      .sort(this.byScheduleTimeAscendingly)
      .map((schedule: Schedule) => schedule.print())
  }

  private byScheduleTimeAscendingly(schedule, another) {
    return schedule.isBefore(another) ? -1 : 1
  }
}
