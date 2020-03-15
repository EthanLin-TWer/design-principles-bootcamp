import { Bird } from './base'
import { Schedule } from '../schedules/base'

export class Swallow extends Bird {
  constructor() {
    super([
      new Schedule('Swallow', 10, `flying`),
      new Schedule('Swallow', 13, `programming`),
    ])
  }

  public getName() {
    return 'Swallow'
  }
}
