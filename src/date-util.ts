export class DateUtil {
  private readonly date: Date
  constructor(dateInYYYYmmDD: string) {
    this.date = new Date(dateInYYYYmmDD)
  }

  public getCurrentMonth(): number {
    return this.date.getMonth()
  }
}
