import { DateComponent } from './date-component'
import { Month } from './month'

export class Day extends DateComponent {
  next(days: number, nextMonth: Month) {}

  addTrailingSpaceForDaysBefore10th() {
    return this.value >= 10 ? this.value.toString() : `${this.value} `
  }

  asDD() {
    return this.asPrintable()
  }
}
