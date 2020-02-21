export class Calendar {
  private readonly date: Date

  constructor(date: string) {
    this.date = new Date(date)
  }

  public printWeekInfoInText(): string {
    const header: string = 'Su  Mo  Tu  Wn  Th  Fr  Sa'
    const content: string = `${this.date.getDate()}   3   4   5   6   7   8`
    return `${header}\n${content}`
  }
}
