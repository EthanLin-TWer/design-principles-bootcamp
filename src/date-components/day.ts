import { DateComponent } from './date-component'

export class Day extends DateComponent {
  asDD() {
    return this.asPrintable()
  }

  addTrailingSpaceForDaysBefore10th() {
    return this.value >= 10 ? this.value.toString() : `${this.value} `
  }
}
