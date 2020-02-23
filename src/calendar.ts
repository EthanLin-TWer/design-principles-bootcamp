import { CalendarDate } from './calendar-date'
// eslint-disable-next-line no-unused-vars
import { ConsolePrinter } from './printers/console-printer'
import { Day } from './date-components/day'

export class Calendar {
  private printer: ConsolePrinter
  constructor(printer: ConsolePrinter) {
    this.printer = printer
  }

  public printCurrentWeek(date: string): string {
    const data: Day[] = Calendar.generateCurrentWeekData(new CalendarDate(date))
    return this.printer.print(Calendar.HEADER, data)
  }

  private static HEADER: string[] = ['日', '一', '二', '三', '四', '五', '六']

  private static generateCurrentWeekData(date: CalendarDate): Day[] {
    const result: Day[] = []

    const firstDayOfTheWeek: CalendarDate = date.getFirstDayOfTheWeek()
    for (let i = 0; i < 7; i += 1) {
      result.push(firstDayOfTheWeek.getNextDay(i).getDate())
    }

    return result
  }
}
