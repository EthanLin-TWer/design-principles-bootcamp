import { DateUtil } from './date-util'

export class Calendar {
  private readonly date: DateUtil

  constructor(date: string) {
    this.date = new DateUtil(date)
  }

  public printCurrentWeek(): string {
    const content: number[] = this.generateCurrentWeekInfo()
    return this.print(content)
  }

  private print(data: number[]) {
    const header = '日\t一\t二\t三\t四\t五\t六'
    const content = data
      .map((date) => (date >= 10 ? date.toString() : `${date} `))
      .join('  ')
      .trimEnd()

    return `${header}\n${content}`
  }

  private generateCurrentWeekInfo(): number[] {
    return (
      Array.from({ length: 7 })
        .fill(this.date.getFirstDayOfTheWeek())
        // @ts-ignore
        .map((date: DateUtil, i: number) => date.getNextDay(i).getDate())
    )
  }
}
