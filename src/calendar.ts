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
    const lastMonthTotalDays = {
      1: 31,
      2: 29,
    }
    // eslint-disable-next-line no-invalid-this
    if (date + i <= lastMonthTotalDays[this.date.getMonth() + 1]) {
      return date + i
    }
    // eslint-disable-next-line no-invalid-this
    return (date + i) % lastMonthTotalDays[this.date.getMonth() + 1]
  }
}
