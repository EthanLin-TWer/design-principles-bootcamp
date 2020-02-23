import { DateComponent } from './date-component'

export class Month extends DateComponent {
  public static JANUARY: Month = new Month(1)
  public static FEBRUARY: number = new Month(2).value
  public static DECEMBER: Month = new Month(12)

  asMM() {
    return this.asPrintable()
  }

  is(month: Month) {
    return this.value === month.value
  }
}
