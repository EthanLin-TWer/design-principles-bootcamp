import { DateComponent } from './date-component'

export class Day extends DateComponent {
  asDD() {
    return this.asPrintable()
  }
}
