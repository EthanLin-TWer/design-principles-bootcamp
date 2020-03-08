export class Year {
  private readonly value: number
  constructor(year: number) {
    this.value = year
  }

  public previous(): Year {
    return new Year(this.value - 1)
  }

  public next(): Year {
    return new Year(this.value + 1)
  }

  // can be implemented with date libraries
  public isLeap(): boolean {
    return (
      this.value % 400 === 0 || (this.value % 4 === 0 && this.value % 100 !== 0)
    )
  }

  public getValue(): number {
    return this.value
  }
}
