import { DateComponent } from './date-component'

export class Day extends DateComponent {
  next(fewDays: number, totalDaysOfCurrentMonth: number) {
    const nextDay = this.value + fewDays
    if (nextDay <= totalDaysOfCurrentMonth) {
      return nextDay
    }

    return nextDay - totalDaysOfCurrentMonth
  }

  previous(fewDays: number, totalDaysOfPreviousMonth: number) {
    const previousDay = this.value - fewDays
    if (this.value - fewDays > 0) {
      return previousDay
    }

    return previousDay + totalDaysOfPreviousMonth
  }

  addTrailingSpaceForDaysBefore10th() {
    return this.value >= 10 ? this.value.toString() : `${this.value} `
  }

  asDD() {
    return this.asPrintable()
  }
}
