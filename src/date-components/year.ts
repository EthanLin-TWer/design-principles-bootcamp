export class Year {
  public value: number
  constructor(year: number) {
    this.value = year
  }

  public previous(): Year {
    return new Year(this.value - 1)
  }

  public next(): Year {
    return new Year(this.value + 1)
  }

  public isLeap(): boolean {
    return (
      this.value % 400 === 0 || (this.value % 4 === 0 && this.value % 100 !== 0)
    )
  }
}
