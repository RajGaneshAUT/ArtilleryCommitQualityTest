const  { expect } = require("@playwright/test");
require("dotenv").config();

class BasePage {
    constructor(page) {
        this.Page = page;
        this.LoginButton = page.locator("//button[contains(text(),'USER LOGIN')]");
        this.UserNameTextbox = page.locator("//input[@id='user_name']");
        this.PassWordTextbox = page.locator("//input[@placeholder='PASSWORD']");
    }

    async launchURL() {
        const url = process.env.BASE_URL;
        // await this.Page.evaluate(() => {
        //     const width = window.screen.availWidth;  // Maximum available width
        //     const height = window.screen.availHeight;  // Maximum available height
        //     window.resizeTo(width, height);  // Resize window to screen size
        //     window.moveTo(0, 0);  // Move the window to the top-left corner of the screen
        //   });
        // await this.Page.setViewportSize({ width: 1920, height: 1080});
        await this.Page.goto(url);
        
    }

    async clickOnLoginButton() {
        await this.LoginButton.click();
    }

    async enterUserName() {
        const userName = process.env.ENVUSERNAME;
        await this.UserNameTextbox.fill(userName);
    }

    async enterPassword() {
        const passWord = process.env.ENVPASSWORD;
        await this.PassWordTextbox.fill(passWord);
    }

    async submitLoginButton() {
        await this.PassWordTextbox.press('Enter');
    }
    
    async loginSucces() {
        await expect(this.Page).toHaveTitle('SeeHawk™ Central');
    }
}

module.exports = {
    BasePage
}