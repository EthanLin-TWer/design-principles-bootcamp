export class Calendar {
  private readonly date: Date

  constructor(date: string) {
    this.date = new Date(date)
  }

  public printCurrentWeek(): string {
    const header: string = '日\t一\t二\t三\t四\t五\t六'
    const content: string = this.generateCurrentWeekInfo()
    return `${header}\n${content}`
  }

  private generateCurrentWeekInfo(): string {
    const dayOfTheWeek = this.date.getDay()
    return (
      Array.from({ length: 7 })
        .fill(this.date.getDate() - dayOfTheWeek)
        // @ts-ignore
        .map(this.getNextDay)
        .map((date) => `${date}${date >= 10 ? '  ' : '   '}`)
        .join('')
        .trimEnd()
    )
  }

  private getNextDay = (date: number, i: number) => {
    if (date + i <= 0) {
      // eslint-disable-next-line no-invalid-this
      return this.getTotalDaysOf(this.getPreviousMonth()) + date + i
    }

    // eslint-disable-next-line no-invalid-this
    if (date + i <= this.getTotalDaysOf(this.getCurrentMonth())) {
      return date + i
    }

    // eslint-disable-next-line no-invalid-this
    return (date + i) % this.getTotalDaysOf(this.getCurrentMonth())
  }

  // can go to date objects
  private getTotalDaysOf(currentMonth: number) {
    if (this.isFebruary(currentMonth) && this.isLeapYear()) {
      return 29
    }

    const lastMonthTotalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return lastMonthTotalDays[currentMonth]
  }

  // can go to date objects
  private getPreviousMonth() {
    return this.getCurrentMonth() - 1
  }

  // can go to date objects
  private isFebruary(month: number) {
    return month + 1 === 2
  }

  // can go to date objects
  private getCurrentMonth() {
    return this.date.getMonth()
  }

  // can be implemented with date libraries
  private isLeapYear() {
    const currentYear = this.date.getFullYear()
    return (
      currentYear % 400 === 0 ||
      (currentYear % 4 === 0 && currentYear % 100 !== 0)
    )
  }
}
