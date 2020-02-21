export class Calendar {
  private readonly date: string

  constructor(date: string) {
    this.date = date
  }

  public printWeekInfoInText(): string {
    return `
Su  Mo  Tu  Wn  Th  Fr  Sa
 2   3   4   5   6   7   8   
    `
  }
}
