import { CalendarDate } from './calendar-date';
import { Day } from './date-components/day';
import { Printer } from './printers/base';

export class Calendar {
  private printer: Printer;
  constructor(printer: Printer) {
    this.printer = printer;
  }

  public printCurrentWeek(date: string): string {
    const data: Day[] = this.generateCurrentWeekData(new CalendarDate(date));
    return this.printer.print(Calendar.HEADER, data);
  }

  private static HEADER: string[] = ['日', '一', '二', '三', '四', '五', '六'];

  private generateCurrentWeekData(date: CalendarDate): Day[] {
    const result: Day[] = [];

    const firstDayOfTheWeek: CalendarDate = date.getFirstDayOfTheWeek();
    for (let i = 0; i < 7; i += 1) {
      result.push(firstDayOfTheWeek.getNextDay(i));
    }

    return result;
  }
}
