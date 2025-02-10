const { BasePage } = require( '../commands/BasePage.cjs' );
 async function userLogsIn(page, test) {
    const step = test?.step || (async (name, fn) => await fn());
    const basePage = new BasePage(page);
    //const {step} = test;
    
    await step('User is launching the URL.', async() =>{
        await basePage.launchURL();
    })

    await step('User clicks on the login button.', async() =>{
        await basePage.clickOnLoginButton();
    })

    await step('User enters username.', async() =>{
        await basePage.enterUserName();
    })

    await step('User enters password.', async() =>{
        await basePage.enterPassword();
    })

    await step('User submits login credentials.', async() =>{
        await basePage.submitLoginButton();
    })

    await step('Verifying successful login.', async() =>{
        await basePage.loginSucces();
    })
}

module.exports = {
    userLogsIn
}