import { DateComponent } from './date-component'
import { Month } from './month'
import { Year } from './year'

export class Day extends DateComponent {
  private month: Month
  private readonly year: Year
  constructor(value: number, month: Month, year: Year) {
    super(value)
    this.month = month
    this.year = year
  }

  next(fewDays: number): Day {
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

  previous(fewDays: number) {
    const previousDay = this.value - fewDays
    if (this.value - fewDays > 0) {
      return previousDay
    }

    return previousDay + this.month.previous().getTotalDays(this.year)
  }

  addTrailingSpaceForDaysBefore10th() {
    return this.value >= 10 ? this.value.toString() : `${this.value} `
  }

  asDD() {
    return this.asPrintable()
  }
}
