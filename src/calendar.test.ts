import { Calendar } from './calendar'

describe('Calendar', () => {
  it('should return text representation of current week when date is the first day of the week', () => {
    const result = new Calendar('2020-02-02').printCurrentWeek()

    expect(result).toEqual(
      '日\t一\t二\t三\t四\t五\t六\n2   3   4   5   6   7   8'
    )
  })

  it('should return text representation of current week when date is in the middle of the week', () => {
    const result = new Calendar('2020-02-03').printCurrentWeek()

    expect(result).toEqual(
      '日\t一\t二\t三\t四\t五\t六\n2   3   4   5   6   7   8'
    )
  })

  it('should return proper indentation for days with two digits', () => {
    const result = new Calendar('2020-02-09').printCurrentWeek()

    expect(result).toEqual(
      '日\t一\t二\t三\t四\t五\t六\n9   10  11  12  13  14  15'
    )
  })

  describe('printing days of next month', () => {
    it('should print Feb days when date is in the last week of Jan', () => {
      const result = new Calendar('2020-01-30').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n26  27  28  29  30  31  1'
      )
    })

    it('should print Feb 29th when date is in the last week of Feb given current year is a leap year given year is divisible by 4', () => {
      const result = new Calendar('2016-02-29').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n28  29  1   2   3   4   5'
      )
    })

    it('should print Feb 28th when date is in the last week of Feb given current year is not a leap year given year is not divisible by 4', () => {
      const result = new Calendar('2019-02-28').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n24  25  26  27  28  1   2'
      )
    })

    it('should print Feb 28th when date is in the last week of Feb given current year is not a leap year given year is divisible by 4 but not divisible by 400', () => {
      const result = new Calendar('1900-02-28').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n25  26  27  28  1   2   3'
      )
    })
  })

  it('should print Apr days when date is in the last week of Mar', () => {
    const result = new Calendar('2020-03-30').printCurrentWeek()

    expect(result).toEqual(
      '日\t一\t二\t三\t四\t五\t六\n29  30  31  1   2   3   4'
    )
  })
})
