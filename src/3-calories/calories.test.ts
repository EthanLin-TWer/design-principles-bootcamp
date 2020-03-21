import puppeteer, { Browser } from 'puppeteer'
import StaticServer from 'static-server'

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

  it('e2e testing', async () => {
    const page = await browser.newPage()
    await page.goto(`http://localhost:${port}/${fileName}`, {
      waitUntil: 'load',
    })

    // select sex
    await page.evaluate(
      (argument) => document.querySelector(argument).click(),
      '#sex-male'
    )
    // enter weight
    const weightInputId = 'input[name="weight"]'
    await page.evaluate(
      (argument) => (document.querySelector(argument).value = ''),
      weightInputId
    )
    await page.type(weightInputId, '120')

    // enter height - feet
    const feetInputId = 'input[name="height_of_feet"]'
    await page.evaluate(
      (argument) => (document.querySelector(argument).value = ''),
      feetInputId
    )
    await page.type(feetInputId, '4')

    // enter height - feet
    const inchInputId = 'input[name="height_of_inch"]'
    await page.evaluate(
      (argument) => (document.querySelector(argument).value = ''),
      inchInputId
    )
    await page.type(inchInputId, '2')

    // enter age
    const ageInputId = 'input[name="age"]'
    await page.evaluate(
      (argument) => (document.querySelector(argument).value = ''),
      ageInputId
    )
    await page.type(ageInputId, '18')

    // click calculate
    await page.evaluate(
      (argument) => document.querySelector(argument).click(),
      'button#calculate'
    )

    await new Promise((resolve) => setTimeout(resolve, 1000))

    // expect output result
    const result = await page.evaluate(
      (argument) => document.querySelector(argument).innerHTML,
      'label[name="recommanded_calories"]'
    )

    expect(result).toEqual('1344.6')
  })
})
