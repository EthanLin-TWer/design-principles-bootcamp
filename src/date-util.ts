export class DateUtil {
  private readonly date: Date
  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
  }

  static of(year, month, day): DateUtil {
    const MM = DateUtil.padToTwoDigits(month)
    const DD = DateUtil.padToTwoDigits(day)
    return new DateUtil(`${year}-${MM}-${DD}`)
  }

  static padToTwoDigits(number: any) {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  public getFirstDayOfTheWeek(): DateUtil {
    if (!this.isFirstWeekOfTheMonth()) {
      const year = this.date.getFullYear()
      const month = this.date.getMonth() + 1
      const day = this.date.getDate() - this.date.getDay()
      return DateUtil.of(year, month, day)
    }

    if (this.isJanuary()) {
      const daysOfLastMonth = this.getTotalDaysOf(12)
      const day = daysOfLastMonth + this.date.getDate() - this.date.getDay()
      const year = this.date.getFullYear() - 1
      return DateUtil.of(year, 12, day)
    }

    const daysOfLastMonth = this.getTotalDaysOf(this.getPreviousMonth())
    const day = daysOfLastMonth + this.date.getDate() - this.date.getDay()
    const year = this.date.getFullYear()
    const month = this.getCurrentMonth() - 1

    return DateUtil.of(year, month, day)
  }

  private isFirstWeekOfTheMonth() {
    const dayOfTheWeek = this.date.getDay() + 1
    return this.date.getDate() - dayOfTheWeek <= 0
  }

  public getNextDay(howManyDays: number): DateUtil {
    if (
      this.date.getDate() + howManyDays >
      this.getTotalDaysOf(this.getCurrentMonth())
    ) {
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

    const year = this.date.getFullYear()
    const month = DateUtil.padToTwoDigits(this.date.getMonth() + 1)
    const days = DateUtil.padToTwoDigits(this.date.getDate() + howManyDays)
    return new DateUtil(`${year}-${month}-${days}`)
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
