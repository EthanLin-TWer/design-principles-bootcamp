import { Animal } from './base'

export class Penguin extends Animal {
  public getName() {
    return 'Penguin'
  }

  flying(): string {
    return ''
  }
}
