import { CalendarDate } from './calendar-date'

export class Calendar {
  private readonly date: CalendarDate
  constructor(date: string) {
    this.date = new CalendarDate(date)
  }

  public printCurrentWeek(): string {
    const content: number[] = this.generateCurrentWeekData()
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

  private generateCurrentWeekData(): number[] {
    const result: number[] = []

    const firstDayOfTheWeek: CalendarDate = this.date.getFirstDayOfTheWeek()
    for (let i = 0; i < 7; i += 1) {
      result.push(firstDayOfTheWeek.getNextDay(i).getDate())
    }

    return result
  }
}
