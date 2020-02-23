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
        .map((date: number, i: number) => {
          return this.dateUtil.getNextDay(date, i)
        })
        .map((date) => `${date}${date >= 10 ? '' : ' '}`)
        .join('  ')
        .trimEnd()
    )
  }
}
