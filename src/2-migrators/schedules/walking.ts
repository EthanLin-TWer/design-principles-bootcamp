import { Schedule } from './base';

export class Walking extends Schedule {
  constructor(attendee: string) {
    super(attendee, 8, 'walking');
  }
}
