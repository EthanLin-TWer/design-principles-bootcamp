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
})
