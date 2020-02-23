import { DateComponent } from './date-component'
import { Month } from './month'
import { Year } from './year'

export class Day extends DateComponent {
  private readonly month: Month
  private readonly year: Year
  constructor(value: number, month: Month, year: Year) {
    super(value)
    this.month = month
    this.year = year
  }

  public next(fewDays: number): Day {
    const nextDay = this.value + fewDays
    if (nextDay <= this.month.getTotalDays(this.year)) {
      return new Day(nextDay, this.month, this.year)
    }

    const day = nextDay - this.month.getTotalDays(this.year)
    if (this.month !== Month.DECEMBER) {
      return new Day(day, this.month.next(), this.year)
    }

    return new Day(day, this.month.next(), this.year)
  }

  public previous(fewDays: number): Day {
    const previousDay = this.value - fewDays
    if (previousDay > 0) {
      return new Day(previousDay, this.month, this.year)
    }

    const totalDaysOfLastMonth = this.month.previous().getTotalDays(this.year)
    const day = previousDay + totalDaysOfLastMonth

    if (this.month !== Month.JANUARY) {
      return new Day(day, this.month.previous(), this.year)
    }

    return new Day(day, this.month.previous(), this.year.previous())
  }

  public addTrailingSpaceForDaysBefore10th() {
    return this.value >= 10 ? this.value.toString() : `${this.value} `
  }

  public asYYYYmmDD() {
    return `${this.year.getValue()}-${this.month.asMM()}-${this.asDD()}`
  }

  private asDD() {
    return this.asPrintable()
  }
}
