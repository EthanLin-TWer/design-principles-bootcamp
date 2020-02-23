import { Day } from '../date-components/day'

export class ConsolePrinter {
  // eslint-disable-next-line class-methods-use-this
  public print(headers: string[], days: Day[]): string {
    const header = headers.join('\t')
    const content = days
      .map((day) => day.addTrailingSpaceForDaysBefore10th())
      .join('  ')
      .trimEnd()

    return `${header}\n${content}`
  }
}
