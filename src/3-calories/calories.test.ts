import puppeteer from 'puppeteer'
import StaticServer from 'static-server'

describe('calories', () => {
  let server
  let browser
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
  })
})
