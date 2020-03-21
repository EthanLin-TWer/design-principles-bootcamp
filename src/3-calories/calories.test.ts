import puppeteer, { Browser } from 'puppeteer'
import StaticServer from 'static-server'

enum Sex {
  MALE,
  FEMALE,
}

describe('calories', () => {
  let server
  let browser: Browser
  const port = 1337
  const fileName = 'calories.html'

  beforeAll(() => {
    const configs = { rootPath: __dirname, port, cors: '*' }
    server = new StaticServer(configs).start()
  })

  afterAll(() => {
    server.stop()
  })

  beforeEach(async () => {
    browser = await puppeteer.launch()
  })

  afterEach(async () => {
    await browser.close()
  })

  async function testCase(
    gender: Sex,
    weight: string,
    feet: string,
    inch: string,
    age: string,
    expected: string
  ) {
    const page = await browser.newPage()
    await page.goto(`http://localhost:${port}/${fileName}`, {
      waitUntil: 'load',
    })

    // select sex
    await page.evaluate(
      (argument) => document.querySelector(argument).click(),
      `#${gender === Sex.MALE ? 'sex-male' : 'sex-female'}`
    )

    // enter weight
    const weightInputId = 'input[name="weight"]'
    await page.evaluate(
      (argument) => (document.querySelector(argument).value = ''),
      weightInputId
    )
    await page.type(weightInputId, weight)

    // enter height - feet
    const feetInputId = 'input[name="height_of_feet"]'
    await page.evaluate(
      (argument) => (document.querySelector(argument).value = ''),
      feetInputId
    )
    await page.type(feetInputId, feet)

    // enter height - feet
    const inchInputId = 'input[name="height_of_inch"]'
    await page.evaluate(
      (argument) => (document.querySelector(argument).value = ''),
      inchInputId
    )
    await page.type(inchInputId, inch)

    // enter age
    const ageInputId = 'input[name="age"]'
    await page.evaluate(
      (argument) => (document.querySelector(argument).value = ''),
      ageInputId
    )
    await page.type(ageInputId, age)

    // click calculate
    await page.evaluate(
      (argument) => document.querySelector(argument).click(),
      'button#calculate'
    )

    // wait for a moment for calculation result to be updated to DOM
    await new Promise((resolve) => setTimeout(resolve, 200))

    // expect output result
    const result = await page.evaluate(
      (argument) => document.querySelector(argument).innerHTML,
      'label[name="recommanded_calories"]'
    )

    expect(result).toEqual(expected)
  }

  it('e2e testing', async () => {
    //               sex     weight feet inch age   expected
    await testCase(Sex.MALE, '120', '4', '2', '18', '1344.6')
  })
})
