import { Schedule } from './base';

export class Eating extends Schedule {
  constructor(attendee: string) {
    super(attendee, 7, 'eating');
  }
}
