import { CalendarDate } from './calendar-date'
import { ConsolePrinter } from './printers/console-printer'

export class Calendar {
  private readonly date: CalendarDate
  constructor(date: string) {
    this.date = new CalendarDate(date)
  }

  protected static HEADER: string[] = ['日', '一', '二', '三', '四', '五', '六']

  public printCurrentWeek(): string {
    const currentWeekData: number[] = this.generateCurrentWeekData()
    return this.print(Calendar.HEADER, currentWeekData)
  }

  private print(headers: string[], data: number[]) {
    return new ConsolePrinter(headers, data).print()
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
