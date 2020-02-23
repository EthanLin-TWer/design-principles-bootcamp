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
    this.year = new Year(this.date.getFullYear())
    this.month = Month.valueOf(this.date.getMonth() + 1)
    this.day = new Day(this.date.getDate())
  }

  static of(year: Year, month: Month, day: number): CalendarDate {
    const MM = month.asMM()
    const DD = new Day(day).asDD()
    return new CalendarDate(`${year.getValue()}-${MM}-${DD}`)
  }

  public getFirstDayOfTheWeek(): CalendarDate {
    const daysOfLastMonth = this.month.previous().getTotalDays(this.year)
    const day = this.day.previous(this.date.getDay(), daysOfLastMonth)

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
    const totalDays = this.month.getTotalDays(this.year)
    const day = this.day.next(howManyDays, totalDays)

    if (this.isWithinSameMonth(howManyDays)) {
      return CalendarDate.of(this.year, this.month, day).getDate()
    }

    const month = this.month.next()
    if (this.isWithinSameYear(howManyDays)) {
      return CalendarDate.of(this.year, month, day).getDate()
    }

    return CalendarDate.of(this.year.next(), month, day).getDate()
  }

  public getDate(): Day {
    return new Day(this.date.getDate())
  }

  private isGoingBackOneMonth() {
    const dayOfTheWeek = this.date.getDay() + 1
    return this.date.getDate() - dayOfTheWeek <= 0
  }

  private isWithinSameMonth(howManyDays: number) {
    return (
      this.date.getDate() + howManyDays <= this.month.getTotalDays(this.year)
    )
  }

  private isWithinSameYear(howManyDays) {
    return !this.isWithinSameMonth(howManyDays) && this.month !== Month.DECEMBER
  }
}
