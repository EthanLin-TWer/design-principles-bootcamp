import { Bird } from './base'
import { Swimming } from '../schedules/swimming'
import { Building } from '../schedules/building'

export class Penguin extends Bird {
  constructor() {
    super()
    this.addSchedules([new Swimming('Penguin'), new Building('Penguin')])
  }

  public getName() {
    return 'Penguin'
  }
}
