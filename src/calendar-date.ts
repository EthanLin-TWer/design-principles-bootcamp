import { Month } from './month'

export class CalendarDate {
  private readonly date: Date
  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
  }

  static of(year: number, month: number, day: number): CalendarDate {
    const MM = CalendarDate.padToTwoDigits(month)
    const DD = CalendarDate.padToTwoDigits(day)
    return new CalendarDate(`${year}-${MM}-${DD}`)
  }

  private ofSameMonth(day: number): CalendarDate {
    return CalendarDate.of(this.getCurrentYear(), this.getCurrentMonth(), day)
  }

  private ofSameYear(month: number, day: number): CalendarDate {
    return CalendarDate.of(this.getCurrentYear(), month, day)
  }

  static padToTwoDigits(number: any) {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  public getFirstDayOfTheWeek(): CalendarDate {
    const offset = this.date.getDate() - this.date.getDay()
    if (!this.isFirstWeekOfTheMonth()) {
      return this.ofSameMonth(offset)
    }

    if (this.getCurrentMonth() === Month.JANUARY) {
      const daysOfLastMonth = this.getTotalDaysOf(Month.DECEMBER)
      const year = this.getLastYear()
      return CalendarDate.of(year, Month.DECEMBER, daysOfLastMonth + offset)
    }

    const daysOfLastMonth = this.getTotalDaysOf(this.getPreviousMonth())
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

    if (!(this.getCurrentMonth() === Month.DECEMBER)) {
      const days = offset - this.getTotalDaysOf(this.getCurrentMonth())
      return this.ofSameYear(this.getNextMonth(), days)
    }

    const days = offset - this.getTotalDaysOf(this.getCurrentMonth())
    return CalendarDate.of(this.getNextYear(), 1, days)
  }

  private isCrossingToNextMonth(howManyDays: number) {
    return (
      this.date.getDate() + howManyDays >
      this.getTotalDaysOf(this.getCurrentMonth())
    )
  }

  public getDate(): number {
    return this.date.getDate()
  }

  private getTotalDaysOf(month: number): number {
    if (month === Month.FEBRUARY && this.isLeapYear()) {
      return 29
    }

    const oops = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return oops[month]
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

  private getLastYear() {
    return this.getCurrentYear() - 1
  }

  private getCurrentYear() {
    return this.date.getFullYear()
  }

  private getNextYear() {
    return this.getCurrentYear() + 1
  }

  // can be implemented with date libraries
  private isLeapYear(): boolean {
    const currentYear = this.date.getFullYear()
    return (
      currentYear % 400 === 0 ||
      (currentYear % 4 === 0 && currentYear % 100 !== 0)
    )
  }
}
