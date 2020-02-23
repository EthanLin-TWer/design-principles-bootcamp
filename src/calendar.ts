import { DateUtil } from './date-util'

export class Calendar {
  private readonly date: Date
  private readonly dateUtil: DateUtil

  constructor(date: string) {
    this.date = new Date(date)
    this.dateUtil = new DateUtil(date)
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
    if (date + i <= this.getTotalDaysOf(this.dateUtil.getCurrentMonth())) {
      return date + i
    }

    // eslint-disable-next-line no-invalid-this
    return (date + i) % this.getTotalDaysOf(this.dateUtil.getCurrentMonth())
  }

  // can go to date objects
  private getTotalDaysOf(currentMonth: number) {
    if (this.isFebruary(currentMonth) && this.dateUtil.isLeapYear()) {
      return 29
    }

    const lastMonthTotalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return lastMonthTotalDays[currentMonth]
  }

  // can go to date objects
  private getPreviousMonth() {
    return this.dateUtil.getCurrentMonth() - 1
  }

  // can go to date objects
  private isFebruary(month: number) {
    return month + 1 === 2
  }
}
