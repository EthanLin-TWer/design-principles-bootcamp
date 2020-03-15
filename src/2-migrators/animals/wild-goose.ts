import { Bird } from './base'
import { Flying } from '../schedules/flying'
import { Swimming } from '../schedules/swimming'
import { Programming } from '../schedules/programming'

export class WildGoose extends Bird {
  constructor() {
    super([
      new Flying('WildGoose'),
      new Swimming('WildGoose'),
      new Programming('WildGoose'),
    ])
  }

  public getName() {
    return 'WildGoose'
  }
}
