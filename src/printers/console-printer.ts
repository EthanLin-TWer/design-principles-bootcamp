export class ConsolePrinter {
  private headers: string[]
  private data: number[]
  constructor(headers: string[], data: number[]) {
    this.headers = headers
    this.data = data
  }

  public print(): string {
    const header = this.headers.join('\t')
    const content = this.data
      .map((date) => (date >= 10 ? date.toString() : `${date} `))
      .join('  ')
      .trimEnd()

    return `${header}\n${content}`
  }
}
