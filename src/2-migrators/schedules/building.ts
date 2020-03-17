import { Schedule } from './base';

export class Building extends Schedule {
  constructor(attendee: string) {
    super(attendee, 14, 'building a house');
  }
}
