import { Month } from './date-components/month'
import { Day } from './date-components/day'
import { Year } from './date-components/year'

export class CalendarDate {
  private readonly date: Date
  private readonly month: Month
  private readonly year: Year

  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
    this.month = Month.valueOf(this.date.getMonth() + 1)
    this.year = new Year(this.date.getFullYear())
  }

  static of(year: Year, month: Month, day: number): CalendarDate {
    const MM = month.asMM()
    const DD = new Day(day).asDD()
    return new CalendarDate(`${year.getValue()}-${MM}-${DD}`)
  }

  private ofSameMonth(day: number): CalendarDate {
    return CalendarDate.of(this.year, this.month, day)
  }

  private ofSameYear(month: Month, day: number): CalendarDate {
    return CalendarDate.of(this.year, month, day)
  }

  public getFirstDayOfTheWeek(): CalendarDate {
    const offset = this.date.getDate() - this.date.getDay()
    if (!this.isFirstWeekOfTheMonth()) {
      return this.ofSameMonth(offset)
    }

    if (this.month === Month.JANUARY) {
      const daysOfLastMonth = Month.DECEMBER.getTotalDays(this.year)
      return CalendarDate.of(
        this.year.previous(),
        Month.DECEMBER,
        daysOfLastMonth + offset
      )
    }

    const month = this.month.previous()
    const daysOfLastMonth = month.getTotalDays(this.year)
    return this.ofSameYear(month, daysOfLastMonth + offset)
  }

  public getNextDay(howManyDays: number): CalendarDate {
    const offset = this.date.getDate() + howManyDays
    if (!this.isCrossingToNextMonth(howManyDays)) {
      return this.ofSameMonth(offset)
    }

    if (this.month === Month.DECEMBER) {
      const days = offset - this.month.getTotalDays(this.year)
      return CalendarDate.of(this.year.next(), Month.JANUARY, days)
    }

    const days = offset - this.month.getTotalDays(this.year)
    return this.ofSameYear(this.month.next(), days)
  }

  public getDate(): Day {
    return new Day(this.date.getDate())
  }

  private isFirstWeekOfTheMonth() {
    const dayOfTheWeek = this.date.getDay() + 1
    return this.date.getDate() - dayOfTheWeek <= 0
  }

  private isCrossingToNextMonth(howManyDays: number) {
    return (
      this.date.getDate() + howManyDays > this.month.getTotalDays(this.year)
    )
  }
}
