export class Year {
  public value: number
  constructor(year: number) {
    this.value = year
  }

  public previous(): Year {
    return new Year(this.value - 1)
  }
}
