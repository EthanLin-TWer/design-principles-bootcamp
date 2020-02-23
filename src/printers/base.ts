import { Day } from '../date-components/day'

export abstract class Printer {
  abstract print(headers: string[], days: Day[]): string
}
