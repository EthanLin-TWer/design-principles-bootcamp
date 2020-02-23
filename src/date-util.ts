export class DateUtil {
  private readonly date: Date
  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
  }

  public getFirstDayOfTheWeek(): DateUtil {
    const dayOfTheWeek = this.date.getDay()
    if (this.date.getDate() - dayOfTheWeek < 0) {
      const offset = this.date.getDate() - dayOfTheWeek
      const daysOfLastMonth = this.getTotalDaysOf(this.getPreviousMonth())
      const day = daysOfLastMonth + offset - 1
      const fullYear = this.date.getFullYear()
      const month = this.getCurrentMonth() === 0 ? 12 : this.getCurrentMonth()
      const year = month === 12 ? fullYear - 1 : fullYear

      return new DateUtil(
        `${year}-${this.padToTwoDigits(month)}-${this.padToTwoDigits(day)}`
      )
    }

    const year = this.date.getFullYear()
    const month = this.date.getMonth() + 1
    const day = this.date.getDate() - dayOfTheWeek
    return new DateUtil(
      `${year}-${this.padToTwoDigits(month)}-${this.padToTwoDigits(day)}`
    )
  }

  private padToTwoDigits(number: number): string {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  public getNextDay(date: number, i: number) {
    if (date + i <= 0) {
      return this.getTotalDaysOf(this.getPreviousMonth()) + date + i
    }

    if (date + i <= this.getTotalDaysOf(this.getCurrentMonth())) {
      return date + i
    }

    return (date + i) % this.getTotalDaysOf(this.getCurrentMonth())
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
