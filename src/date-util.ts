export class DateUtil {
  private readonly date: Date
  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
  }

  public getFirstDayOfTheWeek(): DateUtil {
    const dayOfTheWeek = this.date.getDay() + 1
    if (this.date.getDate() - dayOfTheWeek > 0) {
      const year = this.date.getFullYear()
      const month = this.date.getMonth() + 1
      const day = this.date.getDate() - dayOfTheWeek + 1
      return new DateUtil(
        `${year}-${this.padToTwoDigits(month)}-${this.padToTwoDigits(day)}`
      )
    }
    const offset = this.date.getDate() - dayOfTheWeek
    const daysOfLastMonth = this.getTotalDaysOf(this.getPreviousMonth())
    const day = daysOfLastMonth + offset + 1
    const fullYear = this.date.getFullYear()
    const month = this.getCurrentMonth() === 0 ? 12 : this.getCurrentMonth()
    const year = month === 12 ? fullYear - 1 : fullYear

    return new DateUtil(
      `${year}-${this.padToTwoDigits(month)}-${this.padToTwoDigits(day)}`
    )
  }

  public getNextDay(howManyDays: number): DateUtil {
    if (
      this.date.getDate() + howManyDays >
      this.getTotalDaysOf(this.getCurrentMonth())
    ) {
      const currentMonth = this.date.getMonth() + 1
      const fullYear = this.date.getFullYear()
      const year = currentMonth === 12 ? fullYear + 1 : fullYear
      const month = this.padToTwoDigits(
        currentMonth === 12 ? 1 : currentMonth + 1
      )
      const days = this.padToTwoDigits(
        this.date.getDate() +
          howManyDays -
          this.getTotalDaysOf(this.getCurrentMonth())
      )
      return new DateUtil(`${year}-${month}-${days}`)
    }

    const year = this.date.getFullYear()
    const month = this.padToTwoDigits(this.date.getMonth() + 1)
    const days = this.padToTwoDigits(this.date.getDate() + howManyDays)
    return new DateUtil(`${year}-${month}-${days}`)
  }

  public toString(): string {
    const date = this.date.getDate()
    if (date >= 10) {
      return date.toString()
    }
    return `${date} `
  }

  private padToTwoDigits(number: number): string {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  private getTotalDaysOf(currentMonth: number): number {
    if (this.isFebruary(currentMonth) && this.isLeapYear()) {
      return 29
    }

    const lastMonthTotalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return lastMonthTotalDays[currentMonth]
  }

  private getPreviousMonth() {
    return this.getCurrentMonth() - 1
  }

  private getCurrentMonth(): number {
    return this.date.getMonth()
  }

  private isFebruary(month: number) {
    return month + 1 === 2
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
