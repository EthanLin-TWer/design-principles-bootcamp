export abstract class DateComponent {
  // TODO: [Linesh][2020-02-23] changed to protected later
  public readonly value: number
  constructor(value: number) {
    this.value = value
  }

  public asPrintable() {
    if (this.value >= 10) {
      return this.value.toString()
    }

    return `0${this.value}`
  }
}
