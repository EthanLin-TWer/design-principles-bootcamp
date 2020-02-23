export class DateUtil {
  private readonly date: Date
  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
  }

  static of(year: number, month: number, day: number): DateUtil {
    const MM = DateUtil.padToTwoDigits(month)
    const DD = DateUtil.padToTwoDigits(day)
    return new DateUtil(`${year}-${MM}-${DD}`)
  }

  private ofSameMonth(day: number): DateUtil {
    return DateUtil.of(this.getCurrentYear(), this.getCurrentMonth(), day)
  }

  private ofSameYear(month: number, day: number): DateUtil {
    return DateUtil.of(this.getCurrentYear(), month, day)
  }

  static padToTwoDigits(number: any) {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  public getFirstDayOfTheWeek(): DateUtil {
    const offset = this.date.getDate() - this.date.getDay()
    if (!this.isFirstWeekOfTheMonth()) {
      return this.ofSameMonth(offset)
    }

    if (this.isJanuary()) {
      const daysOfLastMonth = this.getTotalDaysOf(12)
      const year = this.getLastYear()
      return DateUtil.of(year, 12, daysOfLastMonth + offset)
    }

    const daysOfLastMonth = this.getTotalDaysOf(this.getPreviousMonth())
    const month = this.getPreviousMonth()
    return this.ofSameYear(month, daysOfLastMonth + offset)
  }

  private isFirstWeekOfTheMonth() {
    const dayOfTheWeek = this.date.getDay() + 1
    return this.date.getDate() - dayOfTheWeek <= 0
  }

  public getNextDay(howManyDays: number): DateUtil {
    if (this.isWithCurrentMonth(howManyDays)) {
      const days = this.date.getDate() + howManyDays
      return this.ofSameMonth(days)
    }

    const currentMonth = this.date.getMonth() + 1
    const fullYear = this.date.getFullYear()
    const year = currentMonth === 12 ? fullYear + 1 : fullYear
    const month = DateUtil.padToTwoDigits(
      currentMonth === 12 ? 1 : currentMonth + 1
    )
    const days = DateUtil.padToTwoDigits(
      this.date.getDate() +
        howManyDays -
        this.getTotalDaysOf(this.getCurrentMonth())
    )
    return new DateUtil(`${year}-${month}-${days}`)
  }

  private isWithCurrentMonth(howManyDays: number) {
    return (
      this.date.getDate() + howManyDays <=
      this.getTotalDaysOf(this.getCurrentMonth())
    )
  }

  public toString(): string {
    const date = this.date.getDate()
    if (date >= 10) {
      return date.toString()
    }
    return `${date} `
  }

  private getTotalDaysOf(month: number): number {
    if (this.isFebruary(month) && this.isLeapYear()) {
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

  private getLastYear() {
    return this.getCurrentYear() - 1
  }

  private getCurrentYear() {
    return this.date.getFullYear()
  }

  private isFebruary(month: number) {
    return month === 2
  }

  // can be implemented with date libraries
  private isLeapYear(): boolean {
    const currentYear = this.date.getFullYear()
    return (
      currentYear % 400 === 0 ||
      (currentYear % 4 === 0 && currentYear % 100 !== 0)
    )
  }

  private isJanuary(): boolean {
    return this.date.getMonth() + 1 === 1
  }
}
