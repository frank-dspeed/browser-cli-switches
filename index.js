// @ts-check
const chromiumArgs = {
  /** Defines headless mode*/
  headless: '--headless'
}

const chromeArgs = {
  ...chromiumArgs,
  headless: '--headless=chrome'
}

//.....
export { chromiumArgs, chromeArgs }
