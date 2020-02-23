import { Month } from './date-components/month'
import { Day } from './date-components/day'
import { Year } from './date-components/year'

export class CalendarDate {
  private readonly date: Date
  private readonly month: Month
  private readonly year: Year

  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
    this.month = Month.valueOf(this.getCurrentMonth())
    this.year = new Year(this.date.getFullYear())
  }

  static of(year: Year, month: number, day: number): CalendarDate {
    const MM = Month.valueOf(month).asMM()
    const DD = new Day(day).asDD()
    return new CalendarDate(`${year.value}-${MM}-${DD}`)
  }

  private ofSameMonth(day: number): CalendarDate {
    return CalendarDate.of(this.year, this.getCurrentMonth(), day)
  }

  private ofSameYear(month: number, day: number): CalendarDate {
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
        Month.DECEMBER.value,
        daysOfLastMonth + offset
      )
    }

    const daysOfLastMonth = this.month.previous().getTotalDays(this.year)
    const month = this.getPreviousMonth()
    return this.ofSameYear(month, daysOfLastMonth + offset)
  }

  private isFirstWeekOfTheMonth() {
    const dayOfTheWeek = this.date.getDay() + 1
    return this.date.getDate() - dayOfTheWeek <= 0
  }

  public getNextDay(howManyDays: number): CalendarDate {
    const offset = this.date.getDate() + howManyDays
    if (!this.isCrossingToNextMonth(howManyDays)) {
      return this.ofSameMonth(offset)
    }

    if (this.month !== Month.DECEMBER) {
      const days = offset - this.month.getTotalDays(this.year)
      return this.ofSameYear(this.getNextMonth(), days)
    }

    const days = offset - this.month.getTotalDays(this.year)
    return CalendarDate.of(this.year.next(), 1, days)
  }

  private isCrossingToNextMonth(howManyDays: number) {
    return (
      this.date.getDate() + howManyDays > this.month.getTotalDays(this.year)
    )
  }

  public getDate(): Day {
    return new Day(this.date.getDate())
  }

  private getPreviousMonth() {
    return this.getCurrentMonth() - 1
  }

  private getCurrentMonth(): number {
    return this.date.getMonth() + 1
  }

  private getNextMonth() {
    return this.getCurrentMonth() + 1
  }
}
