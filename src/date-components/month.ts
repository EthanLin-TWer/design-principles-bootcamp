import { DateComponent } from './date-component'
import { Year } from './year'

export class Month extends DateComponent {
  public static JANUARY: Month = new Month(1, 31)
  public static TEMP_FEBRUARY: Month = new Month(2, 28)
  public static FEBRUARY: number = new Month(2, 28).value
  public static MARCH: Month = new Month(3, 31)
  public static APRIL: Month = new Month(4, 30)
  public static MAY: Month = new Month(5, 31)
  public static JUNE: Month = new Month(6, 30)
  public static JULY: Month = new Month(7, 31)
  public static AUGUST: Month = new Month(8, 31)
  public static SEPTEMBER: Month = new Month(9, 30)
  public static OCTOBER: Month = new Month(10, 31)
  public static NOVEMBER: Month = new Month(11, 30)
  public static DECEMBER: Month = new Month(12, 31)
  public static NULL: Month = new Month(0, 0)
  private static readonly Values: Month[] = [
    Month.JANUARY,
    Month.TEMP_FEBRUARY,
    Month.MARCH,
    Month.APRIL,
    Month.MAY,
    Month.JUNE,
    Month.JULY,
    Month.AUGUST,
    Month.SEPTEMBER,
    Month.OCTOBER,
    Month.NOVEMBER,
    Month.DECEMBER,
  ]

  private readonly totalDays: number
  constructor(value: number, totalDays: number) {
    super(value)
    this.totalDays = totalDays
  }

  public static valueOf(month: number): Month {
    return Month.Values.find((result) => result.value === month) || Month.NULL
  }

  public asMM(): string {
    return this.asPrintable()
  }

  public previous(): Month {
    const index = Month.Values.findIndex(
      (result) => result.value === this.value
    )
    return Month.Values[(index + 11) % Month.Values.length]
  }

  public next(): Month {
    const index = Month.Values.findIndex(
      (result) => result.value === this.value
    )
    return Month.Values[(index + 1) % Month.Values.length]
  }

  public getTotalDays(year: Year) {
    if (this === Month.TEMP_FEBRUARY && year.isLeap()) {
      return 29
    }

    return this.totalDays
  }
}
