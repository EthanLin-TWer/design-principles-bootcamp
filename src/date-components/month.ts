import { DateComponent } from './date-component'

export class Month extends DateComponent {
  public static JANUARY: number = new Month(1).value
  public static FEBRUARY: number = new Month(2).value
  public static DECEMBER: number = new Month(12).value

  asMM() {
    return this.asPrintable()
  }
}
