export class Schedule {
  private readonly attendee: string
  private readonly timeIn24Hours: number
  private readonly activity: string

  constructor(attendee: string, timeIn24Hours: number, activity: string) {
    this.attendee = attendee
    this.timeIn24Hours = timeIn24Hours
    this.activity = activity
  }

  print() {
    return `It's ${this.timeIn24Hours}:00, I'm ${this.attendee}, I'm ${this.activity}`
  }

  isBefore(schedule: Schedule) {
    return this.timeIn24Hours < schedule.timeIn24Hours
  }
}
