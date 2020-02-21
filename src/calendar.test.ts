import { Calendar } from './calendar'

describe('Calendar', () => {
  it('should return text representation of calendar of the week', () => {
    const result = new Calendar('2020-02-02').printWeekInfoInText()

    expect(result).toEqual(
      'Su  Mo  Tu  Wn  Th  Fr  Sa\n2   3   4   5   6   7   8'
    )
  })
})
