import { Bird } from './base';
import { Flying } from '../schedules/flying';
import { Programming } from '../schedules/programming';

export class Swallow extends Bird {
  constructor() {
    super();
    this.addSchedules([
      new Flying(this.getName()),
      new Programming(this.getName()),
    ]);
  }

  public getName() {
    return 'Swallow';
  }
}
