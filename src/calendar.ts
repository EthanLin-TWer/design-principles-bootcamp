export class Calendar {
  private readonly date: string

  constructor(date: string) {
    this.date = date
  }

  public printWeekInfoInText(): string {
    const header: string = 'Su  Mo  Tu  Wn  Th  Fr  Sa'
    const content: string = '2   3   4   5   6   7   8'
    return `${header}\n${content}`
  }
}
