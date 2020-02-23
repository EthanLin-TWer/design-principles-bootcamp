export class DateUtil {
  private readonly date: Date
  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
  }

  public getCurrentMonth(): number {
    return this.date.getMonth()
  }

  public getTotalDaysOf(currentMonth: number): number {
    if (this.isFebruary(currentMonth) && this.isLeapYear()) {
      return 29
    }

    const lastMonthTotalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return lastMonthTotalDays[currentMonth]
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
