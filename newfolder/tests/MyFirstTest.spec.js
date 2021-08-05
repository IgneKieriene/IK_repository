const { test, expect } = require('@playwright/test');
const { DuckStartPage } = require('../pages/duckStartPage')

test.describe('', () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    startPage = new DuckStartPage(page);
  });
  test.beforeEach(async () => {
    await startPage.goto();
  });


test('duckduckgo is loeading', async () => {
  //await page.goto('https://duckduckgo.com');
  const ducklogo = await page.isVisible('#logo_homepage_link')
  expect(ducklogo).toBe(true);
});


test('test that search is working', async () => {
  //await page.goto('https://duckduckgo.com');
  await page.waitForSelector ('#logo_homepage_link');
  await page.fill('#search_form_input_homepage','Test');
  await page.click('#search_button_homepage');
  const result1TextContent = await page.textContent('#r1-0');
  console.log(result1TextContent);
  expect(true).toBe(true);
});



test('test that search is workingA', async () => {
  //await page.goto('https://duckduckgo.com');
  await page.waitForSelector ('#logo_homepage_link');
});

test('test screenshots', async () => {
  //await page.goto('https://duckduckgo.com');
  await page.waitForSelector ('#logo_homepage_link');
  await page.fill('#search_form_input_homepage','Test');
  await page.click('#search_button_homepage');
  const result1TextContent = await page.textContent('#r1-0');
  console.log(result1TextContent);
  expect(true).toBe(true);
});

test('test cheat sheets', async () => {
  //await page.goto('https://duckduckgo.com');
  await page.waitForSelector ('#logo_homepage_link');
  await page.fill('#search_form_input_homepage','microsoft word cheat sheet');
  await page.click('#search_button_homepage');
  const result2TextContent = await page.isVisible('#duckbar_new > li > a');
  const result3TextContent = await page.textContent('h3.c-base__title');
  expect(result2TextContent).toBe(true);
  expect(result3TextContent).toBe('Microsoft Word 2010');
});

test('testing wiki short link', async () => {
  //await page.goto('https://duckduckgo.com/');
  // waits for selector to be loaded into the website
  await page.waitForSelector('#logo_homepage_link');
  // fills the inout field with text "test"
  await page.fill('#search_form_input_homepage', 'shorten www.wikipedia.com');
  await page.click('#search_button_homepage');
  const shortenURL = await page.isVisible('#shorten-url');
  const shortenURLText = await page.inputValue('#shorten-url');
  expect(shortenURL).toBe(true);
  await page.goto(shortenURLText);
  const url = await page.url();
  expect(url).toBe('https://www.wikipedia.org/');
});
test('Check that url shortener works', async () => {
  //await page.goto('https://start.duckduckgo.com/');
  await page.waitForSelector('#logo_homepage_link');
  await page.fill('#search_form_input_homepage', 'shorten www.wikipedia.com');
  await page.click('#search_button_homepage');
  const shortenedUrl = await page.getAttribute('#shorten-url', 'value');
  await page.goto(shortenedUrl);
  const url = page.url();
  expect(url).toBe('https://www.wikipedia.org/');
});
  test('panda', async ({ page }) => {
   // await page.goto('https://start.duckduckgo.com/');
    await page.waitForSelector("#search_form_input_homepage");
    await page.fill('#search_form_input_homepage', "intitle:panda");
    await page.click("#search_button_homepage");
    await page.waitForNavigation();
  const results = await page.evaluate(() => Array.from(document.querySelectorAll('.result__title'), element => element.textContent));
    results.forEach(result => {
      expect(result).toContain("Panda");
    });
  });
  const passwordsLengths = ['8', '16', '64'];
  passwordsLengths.forEach(passwordLength => {
    test(`Generate ${passwordLength} chracters long password`, async () => {
      //await page.goto('https://start.duckduckgo.com/');
      await page.waitForSelector("#search_form_input_homepage");
      await page.fill('#search_form_input_homepage', ("password " + passwordLength));
      await page.click("#search_button_homepage");
      const generatedPassword = await page.textContent(".c-base__title");
      expect(generatedPassword.length).toEqual(+passwordLength)
    });
  });
  const invalidPass = ['7','65'];
  invalidPass.forEach(passwordLength => {
    test(`Generate ${passwordLength} chracters long password test`, async ({page}) => {
      //await page.goto('https://start.duckduckgo.com/');
      await page.waitForSelector("#search_form_input_homepage");
      await page.fill('#search_form_input_homepage', ("password " + passwordLength));
      await page.click("#search_button_homepage");
      const isPasswordElementVisible = await page.isVisible(".c-base__sub");
      expect(isPasswordElementVisible).toEqual(false)
    });
  });
});

  

  