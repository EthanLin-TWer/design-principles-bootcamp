export class Calendar {
  private readonly date: Date

  constructor(date: string) {
    this.date = new Date(date)
  }

  public printWeekInfoInText(): string {
    const header: string = '日\t一\t二\t三\t四\t五\t六'
    const content: string = this.generateCurrentWeekInfo()
    return `${header}\n${content}`
  }

  private generateCurrentWeekInfo(): string {
    return (
      Array.from({ length: 7 })
        .fill(this.date.getDate())
        // @ts-ignore
        .map((date, i) => `${date + i}`)
        .join('   ')
    )
  }
}
