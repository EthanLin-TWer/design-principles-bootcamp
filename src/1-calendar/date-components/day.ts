import { DateComponent } from './date-component';
import { Month } from './month';
import { Year } from './year';

export class Day extends DateComponent {
  private readonly month: Month;
  private readonly year: Year;
  constructor(value: number, month: Month, year: Year) {
    super(value);
    this.month = month;
    this.year = year;
  }

  public next(fewDays: number): Day {
    const nextDay = this.value + fewDays;
    if (this.isWithinSameMonth(nextDay)) {
      return new Day(nextDay, this.month, this.year);
    }

    const day = nextDay - this.month.getTotalDays(this.year);
    if (this.isWithinSameYear()) {
      return new Day(day, this.month.next(), this.year);
    }

    return new Day(day, this.month.next(), this.year.next());
  }

  public previous(fewDays: number): Day {
    const previousDay = this.value - fewDays;
    if (!this.isGoingBackOneMonth(previousDay)) {
      return new Day(previousDay, this.month, this.year);
    }

    const totalDaysOfLastMonth = this.month.previous().getTotalDays(this.year);
    const day = previousDay + totalDaysOfLastMonth;

    if (!this.isGoingBackOneYear()) {
      return new Day(day, this.month.previous(), this.year);
    }

    return new Day(day, this.month.previous(), this.year.previous());
  }

  private isGoingBackOneYear() {
    return this.month === Month.JANUARY;
  }

  private isGoingBackOneMonth(previousDay: number) {
    return previousDay <= 0;
  }

  public addTrailingSpaceForDaysBefore10th() {
    return this.value >= 10 ? this.value.toString() : `${this.value} `;
  }

  public getValue(): number {
    return this.value;
  }

  public asYYYYmmDD() {
    return `${this.year.getValue()}-${this.month.asMM()}-${this.asDD()}`;
  }

  private isWithinSameYear() {
    return this.month !== Month.DECEMBER;
  }

  private isWithinSameMonth(nextDay: number) {
    return nextDay <= this.month.getTotalDays(this.year);
  }

  private asDD() {
    return this.asPrintable();
  }
}
