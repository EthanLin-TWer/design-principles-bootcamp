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

  static of(year: Year, month: Month, day: number): CalendarDate {
    const MM = month.asMM()
    const DD = new Day(day, month, year).asDD()
    return new CalendarDate(`${year.getValue()}-${MM}-${DD}`)
  }

  public getFirstDayOfTheWeek(): CalendarDate {
    const day = this.day.previous(this.date.getDay())
    if (!this.isGoingBackOneMonth()) {
      return CalendarDate.of(this.year, this.month, day)
    }

    if (!this.isGoingBackOneYear()) {
      return CalendarDate.of(this.year, this.month.previous(), day)
    }

    return CalendarDate.of(this.year.previous(), this.month.previous(), day)
  }

  private isGoingBackOneYear() {
    return this.isGoingBackOneMonth() && this.month === Month.JANUARY
  }

  public getNextDay(howManyDays: number): Day {
    return this.day.next(howManyDays)
  }

  private isGoingBackOneMonth() {
    const dayOfTheWeek = this.date.getDay() + 1
    return this.date.getDate() - dayOfTheWeek <= 0
  }
}
