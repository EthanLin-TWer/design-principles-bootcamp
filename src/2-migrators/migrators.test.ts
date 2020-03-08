import { Migrators } from './migrators'

describe('Migrators', () => {
  it('should return scheduling of swans and swallows', () => {
    const result: string[] = new Migrators().main()
    expect(result).toEqual([])
  })
})
