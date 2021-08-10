const { test, expect } = require('@playwright/test');
//const { StartPage } = require('../BasicCalculator');


const builds = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

builds.forEach(build => {
test.only(`Test_1_Button in ${build}`, async ({browser}) => {
const page = await browser.newPage(); 
await page.goto('https://testsheepnz.github.io/BasicCalculator');
const isBuildNowVisible = await page.isVisible('#selectBuild');  
expect(isBuildNowVisible).toBe(true);
await page.selectOption('#selectBuild', build);
const calculateButton = await page.isVisible('#calculateButton');
expect(calculateButton).toBe(true);
});
});

  builds.forEach(build => {
  test.only(`Test_2_Invalidnumbers in ${build}`, async ({browser}) => {
  const page = await browser.newPage(); 
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  const isBuildNowVisible = await page.isVisible('#selectBuild');
  expect(isBuildNowVisible).toBe(true);
  await page.selectOption('#selectBuild', build);
  const firstNumber = await page.isVisible('#number1Field');
  await page.click('#number1Field');
  await page.fill('#number1Field', '@');
  expect(firstNumber).toBe(true);
  const secondNumber = await page.isVisible('#number2Field');
  await page.click('#number2Field');
  await page.fill('#number2Field', '4');
  expect(secondNumber).toBe(true);
  const operationButton = await page.isVisible('#selectOperationDropdown');
  const subtract = await page.$('#selectOperationDropdown');
  await subtract?.selectOption('1');
  await page.click('#calculateButton');
  const errorMessage = await page.textContent('#errorMsgField');
  expect (errorMessage).toBe("Number 1 is not a number");
});
});
  builds.forEach(build => {
    test.only(`Test_3_Concatenate in ${build}`, async ({browser}) => {
    const page = await browser.newPage(); 
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    const isBuildNowVisible = await page.isVisible('#selectBuild');
    expect(isBuildNowVisible).toBe(true);
    await page.selectOption('#selectBuild', build);
    const firstNumber = await page.isVisible('#number1Field');
    await page.click('#number1Field');
    await page.fill('#number1Field', '5');
    expect(firstNumber).toBe(true);
    const secondNumber = await page.isVisible('#number2Field');
    await page.click('#number2Field');
    await page.fill('#number2Field', '4');
    expect(secondNumber).toBe(true);
    const operationButton = await page.isVisible('#selectOperationDropdown');
    const concatenate = await page.$('#selectOperationDropdown');
    await concatenate?.selectOption('4');
    await page.click('#calculateButton');
    const answerForm = await page.isVisible('#answerForm');
    //const answerField = await page.getAttribute('#numberAnswerField','value');
   const answerField = await page.inputValue('#numberAnswerField');
    expect (answerField).toBe("54");
});    
});
    builds.forEach(build => {
    test.only(`Test_4_Checkbox in ${build}`, async ({browser}) => {
    const page = await browser.newPage(); 
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    const isBuildNowVisible = await page.isVisible('#selectBuild');
    expect(isBuildNowVisible).toBe(true);
    await page.selectOption('#selectBuild', build);
    const integersOption = expect(await page.isChecked('#integerSelect')).toBeFalsy();
});
});

    builds.forEach(build => {
    test.only(`Test_5_DivideFrom0 in ${build}`, async ({browser}) => {
    const page = await browser.newPage(); 
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    const isBuildNowVisible = await page.isVisible('#selectBuild');
    expect(isBuildNowVisible).toBe(true);
    await page.selectOption('#selectBuild', build);
    const firstNumber = await page.isVisible('#number1Field');
    await page.click('#number1Field');
    await page.fill('#number1Field', '10');
    expect(firstNumber).toBe(true);
    const secondNumber = await page.isVisible('#number2Field');
    await page.click('#number2Field');
    await page.fill('#number2Field', '0');
    expect(secondNumber).toBe(true);
    const operationButton = await page.isVisible('#selectOperationDropdown');
    const divide = await page.$('#selectOperationDropdown');
    await divide?.selectOption('3');
    await page.click('#calculateButton');
    const errorMessage = await page.textContent('#errorMsgField');
    expect (errorMessage).toBe("Divide by zero error!");
});
});





