export class ConsolePrinter {
  // eslint-disable-next-line class-methods-use-this
  public print(headers: string[], data: number[]): string {
    const header = headers.join('\t')
    const content = data
      .map((date) => (date >= 10 ? date.toString() : `${date} `))
      .join('  ')
      .trimEnd()

    return `${header}\n${content}`
  }
}
