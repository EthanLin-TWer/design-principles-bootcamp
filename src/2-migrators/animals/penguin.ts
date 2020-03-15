import { Bird } from './base'
import { Schedule } from '../schedules/base'

export class Penguin extends Bird {
  constructor() {
    super([
      new Schedule('Penguin', 11, `swimming`),
      new Schedule('Penguin', 14, `building a house`),
    ])
  }

  public getName() {
    return 'Penguin'
  }
}
