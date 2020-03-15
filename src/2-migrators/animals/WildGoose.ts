import { Bird } from './base'
import { Schedule } from '../schedules/base'

export class WildGoose extends Bird {
  constructor() {
    super([
      new Schedule('WildGoose', 10, `flying`),
      new Schedule('WildGoose', 11, `swimming`),
      new Schedule('WildGoose', 13, `programming`),
    ])
  }

  public getName() {
    return 'WildGoose'
  }
}
