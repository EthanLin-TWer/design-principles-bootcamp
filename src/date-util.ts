export class DateUtil {
  private readonly date: Date
  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
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
