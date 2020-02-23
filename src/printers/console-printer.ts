import { Day } from '../date-components/day'

export class ConsolePrinter {
  // eslint-disable-next-line class-methods-use-this
  public print(headers: string[], data: number[]): string {
    const header = headers.join('\t')
    const content = data
      .map((date) => new Day(date).addTrailingSpaceForDaysBefore10th())
      .join('  ')
      .trimEnd()

    return `${header}\n${content}`
  }
}
