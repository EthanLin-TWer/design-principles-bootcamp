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

  private isFirstWeekOfTheMonth() {
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
