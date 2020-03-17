export abstract class DateComponent {
  protected readonly value: number;
  constructor(value: number) {
    this.value = value;
  }

  public asPrintable() {
    if (this.value >= 10) {
      return this.value.toString();
    }

    return `0${this.value}`;
  }
}
