import { DateUtil } from './date-util'

export class Calendar {
  private readonly date: DateUtil

  constructor(date: string) {
    this.date = new DateUtil(date)
  }

  public printCurrentWeek(): string {
    const header: string = '日\t一\t二\t三\t四\t五\t六'
    const content: string = this.generateCurrentWeekInfo()
    return `${header}\n${content}`
  }

  private generateCurrentWeekInfo(): string {
    return (
      Array.from({ length: 7 })
        .fill(this.date.getFirstDayOfTheWeek())
        // @ts-ignore
        .map((date: DateUtil, i: number) => {
          return date.getNextDay(i).toString()
        })
        .join('  ')
        .trimEnd()
    )
  }
}
