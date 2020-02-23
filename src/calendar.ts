import { CalendarDate } from './calendar-date'

export class Calendar {
  private readonly date: CalendarDate
  constructor(date: string) {
    this.date = new CalendarDate(date)
  }

  protected static HEADER: string[] = ['日', '一', '二', '三', '四', '五', '六']

  public printCurrentWeek(): string {
    const currentWeekData: number[] = this.generateCurrentWeekData()
    return this.print(currentWeekData)
  }

  private print(data: number[]) {
    const header = Calendar.HEADER.join('\t')
    const content = data
      .map((date) => (date >= 10 ? date.toString() : `${date} `))
      .join('  ')
      .trimEnd()

    return `${header}\n${content}`
  }

  private generateCurrentWeekData(): number[] {
    const result: number[] = []

    const firstDayOfTheWeek: CalendarDate = this.date.getFirstDayOfTheWeek()
    for (let i = 0; i < 7; i += 1) {
      result.push(firstDayOfTheWeek.getNextDay(i).getDate())
    }

    return result
  }
}
