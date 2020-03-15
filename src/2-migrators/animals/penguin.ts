import { Bird } from './base'
import { Swimming } from '../schedules/swimming'
import { Building } from '../schedules/building'

export class Penguin extends Bird {
  constructor() {
    super([new Swimming('Penguin'), new Building('Penguin')])
  }

  public getName() {
    return 'Penguin'
  }
}
