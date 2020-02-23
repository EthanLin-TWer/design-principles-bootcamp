import { Month } from './date-components/month'
import { Day } from './date-components/day'
import { Year } from './date-components/year'

export class CalendarDate {
  private readonly date: Date
  private readonly month: Month
  private readonly year: Year
  private readonly day: Day

  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
    this.month = Month.valueOf(this.date.getMonth() + 1)
    this.year = new Year(this.date.getFullYear())
    this.day = new Day(this.date.getDate(), this.month, this.year)
  }

  public getFirstDayOfTheWeek(): CalendarDate {
    const day = this.day.previous(this.date.getDay())
    return new CalendarDate(day.asYYYYmmDD())
  }

  public getNextDay(howManyDays: number): Day {
    return this.day.next(howManyDays)
  }
}
