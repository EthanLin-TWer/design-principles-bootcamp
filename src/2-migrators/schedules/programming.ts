import { Schedule } from './base';

export class Programming extends Schedule {
  constructor(attendee: string) {
    super(attendee, 13, 'programming');
  }
}
