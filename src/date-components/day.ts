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

  next(fewDays: number) {
    const nextDay = this.value + fewDays
    if (nextDay <= this.month.getTotalDays(this.year)) {
      return nextDay
    }

    return nextDay - this.month.getTotalDays(this.year)
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
