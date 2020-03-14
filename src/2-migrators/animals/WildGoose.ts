import { Animal } from './base'
import { Schedule } from '../schedules/base'

export class WildGoose extends Animal {
  constructor() {
    super([new Schedule('WildGoose', 13, `programming`)])
  }

  public getName() {
    return 'WildGoose'
  }
}
