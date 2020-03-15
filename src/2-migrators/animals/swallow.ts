import { Bird } from './base'
import { Schedule } from '../schedules/base'
import { Flying } from '../schedules/flying'
import { Programming } from '../schedules/programming'

export class Swallow extends Bird {
  constructor() {
    super([new Flying('Swallow'), new Programming('Swallow')])
  }

  public getName() {
    return 'Swallow'
  }
}
