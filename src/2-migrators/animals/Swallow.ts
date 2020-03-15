import { Animal } from './base'
import { Schedule } from '../schedules/base'

export class Swallow extends Animal {
  constructor() {
    super([new Schedule('Swallow', 13, `programming`)])
  }

  public getName() {
    return 'Swallow'
  }
}
