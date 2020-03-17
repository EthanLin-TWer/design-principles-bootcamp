import { Schedule } from './base';

export class Performing extends Schedule {
  constructor(attendee: string) {
    super(attendee, 9, 'performing');
  }
}
