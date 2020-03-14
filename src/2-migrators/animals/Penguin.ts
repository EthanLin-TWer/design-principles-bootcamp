import { Animal } from './base'
import { Schedule } from '../schedules/base'

export class Penguin extends Animal {
  constructor() {
    super([new Schedule('Penguin', 14, `building a house`)])
  }

  public getName() {
    return 'Penguin'
  }

  flying(): string {
    return ''
  }

  programming(): string {
    return ''
  }
}
