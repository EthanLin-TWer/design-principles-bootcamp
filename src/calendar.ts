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
    // eslint-disable-next-line no-invalid-this
    if (date + i <= this.getLastMonthTotalDays()) {
      return date + i
    }

    // eslint-disable-next-line no-invalid-this
    return (date + i) % this.getLastMonthTotalDays()
  }

  // can go to date objects
  private getLastMonthTotalDays() {
    const lastMonthTotalDays = {
      1: 31,
      2: 28,
    }

    if (this.getCurrentMonth() === 2 && this.isLeapYear()) {
      return 29
    }

    return lastMonthTotalDays[this.getCurrentMonth()]
  }

  // can go to date objects
  private getCurrentMonth() {
    return this.date.getMonth() + 1
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
