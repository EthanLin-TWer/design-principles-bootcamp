import { Day } from '../date-components/day'

export class ConsolePrinter {
  public print(headers: string[], days: Day[]): string {
    const header = headers.join('\t')
    const content = days
      .map((day) => day.addTrailingSpaceForDaysBefore10th())
      .join('  ')

    return `${header}\n${content}`.trimEnd()
  }
}
