export class Calendar {
  private readonly date: Date

  constructor(date: string) {
    this.date = new Date(date)
  }

  public printWeekInfoInText(): string {
    const header: string = 'Su  Mo  Tu  Wn  Th  Fr  Sa'
    const content: string = this.generateCurrentWeekInfo()
    return `${header}\n${content}`
  }

  private generateCurrentWeekInfo(): string {
    return (
      Array.from({ length: 7 })
        .fill(this.date.getDate())
        // @ts-ignore
        .map((date, i) => ` ${date + i}`)
        .join('  ')
    )
  }
}
