export class Month {
  static JANUARY: number = new Month(1).getValue()
  static FEBRUARY: number = new Month(2).getValue()
  static DECEMBER: number = new Month(12).getValue()

  private readonly value
  constructor(value) {
    this.value = value
  }

  getValue() {
    return this.value
  }
}
