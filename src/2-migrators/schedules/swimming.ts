import { Schedule } from './base';

export class Swimming extends Schedule {
  constructor(attendee: string) {
    super(attendee, 11, 'swimming');
  }
}
