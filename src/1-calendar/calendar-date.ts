import { Month } from './date-components/month'
import { Day } from './date-components/day'
import { Year } from './date-components/year'

export class CalendarDate {
  private readonly day: Day
  private readonly daysInTheWeek: number

  constructor(dateInYYYYmmDD: string) {
    const date = new Date(dateInYYYYmmDD)
    const year: Year = new Year(date.getFullYear())
    const month: Month = Month.valueOf(date.getMonth() + 1)

    this.day = new Day(date.getDate(), month, year)
    this.daysInTheWeek = date.getDay()
  }

  public getFirstDayOfTheWeek(): CalendarDate {
    const day = this.day.previous(this.daysInTheWeek)
    return new CalendarDate(day.asYYYYmmDD())
  }

  public getNextDay(days: number): Day {
    return this.day.next(days)
  }
}
