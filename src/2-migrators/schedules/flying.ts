import { Schedule } from './base';

export class Flying extends Schedule {
  constructor(attendee: string) {
    super(attendee, 10, 'flying');
  }
}
