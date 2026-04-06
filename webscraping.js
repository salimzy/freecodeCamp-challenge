const browser = await pippeter.lunch();
const page = await browser.newPage();
await page.goto('https://fireship.io/');
await page.waitForSelector('body');
const data = await page.evaluate(()=>{
  return document.body.innerText;
});
await browser.close();
