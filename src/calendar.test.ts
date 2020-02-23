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
    it('should print February days when date is in the last week of January', () => {
      const result = new Calendar('2020-01-30').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n26  27  28  29  30  31  1'
      )
    })

    it('should print February 29th when date is in the last week of February given current year is a leap year given year is divisible by 4', () => {
      const result = new Calendar('2016-02-29').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n28  29  1   2   3   4   5'
      )
    })

    it('should print February 28th when date is in the last week of February given current year is not a leap year given year is not divisible by 4', () => {
      const result = new Calendar('2019-02-28').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n24  25  26  27  28  1   2'
      )
    })

    it('should print February 28th when date is in the last week of February given current year is not a leap year given year is divisible by 4 but not divisible by 400', () => {
      const result = new Calendar('1900-02-28').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n25  26  27  28  1   2   3'
      )
    })

    it('should print April days when date is in the last week of March', () => {
      const result = new Calendar('2020-03-30').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n29  30  31  1   2   3   4'
      )
    })

    it('should print May days when date is in the last week of April', () => {
      const result = new Calendar('2020-04-30').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n26  27  28  29  30  1   2'
      )
    })

    it('should print June days when date is in the last week of May', () => {
      const result = new Calendar('2020-05-31').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n31  1   2   3   4   5   6'
      )
    })

    it('should print July days when date is in the last week of Jun', () => {
      const result = new Calendar('2020-06-30').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n28  29  30  1   2   3   4'
      )
    })

    it('should print August days when date is in the last week of July', () => {
      const result = new Calendar('2020-07-30').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n26  27  28  29  30  31  1'
      )
    })

    it('should print September days when date is in the last week of August', () => {
      const result = new Calendar('2020-08-31').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n30  31  1   2   3   4   5'
      )
    })

    it('should print October days when date is in the last week of September', () => {
      const result = new Calendar('2020-09-30').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n27  28  29  30  1   2   3'
      )
    })

    it('should print November days when date is in the last week of October', () => {
      const result = new Calendar('2019-10-31').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n27  28  29  30  31  1   2'
      )
    })

    it('should print December days when date is in the last week of November', () => {
      const result = new Calendar('2020-11-30').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n29  30  1   2   3   4   5'
      )
    })

    it('should print January days when date is in the last week of December', () => {
      const result = new Calendar('2020-12-31').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n27  28  29  30  31  1   2'
      )
    })
  })

  describe('printing days of previous month', () => {
    it('should print January days when date is in the first week of February', () => {
      const result = new Calendar('2020-02-01').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n26  27  28  29  30  31  1'
      )
    })

    it('should print February days when date is in the first week of March', () => {
      const result = new Calendar('2019-03-02').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n24  25  26  27  28  1   2'
      )
    })

    it('should print December days when date is in the first week of January', () => {
      const result = new Calendar('2020-01-02').printCurrentWeek()

      expect(result).toEqual(
        '日\t一\t二\t三\t四\t五\t六\n29  30  31  1   2   3   4'
      )
    })
  })
})
