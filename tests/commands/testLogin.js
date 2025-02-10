async function testLogin(page){

await page.goto('https://commitquality.com/');
await page.pause();

}

module.exports = { testLogin };
