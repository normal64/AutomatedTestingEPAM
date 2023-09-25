const travelPage = require("../pageobjects/phptravels.page.js")

browser.addCommand("waitAndClick", function (selector) {
    // `this` is the return value of $(selector)
    console.log(`Waiting for element with selector: ${selector}`);
    const element = $(selector);
    element.waitForDisplayed();
    element.waitForClickable({ timeout: 3000 })
    console.log("Element displayed, clicking...");
    element.click();
});
//https://docs.google.com/spreadsheets/d/1kFkc7CKAPNFUw_gajtFJwmSVhJUcVjEuPNESeR4pxuI/edit#gid=0

describe('php travels cases', () => {
    const emailValue = "testUPDATED@gmail.com"
    let screenshotIndex = 1;
    
    beforeEach(() => {
        browser.url("https://phptravels.org/login");
        browser.setWindowSize(1920, 1600)
        });
    afterEach(() => {
        const screenshotName = `test/screenshots/screenshot${screenshotIndex}.png`;
        browser.saveScreenshot(screenshotName);
        screenshotIndex++;
    });
    
    it("should fill email input", async ()=>{
        const isEmailInputExisting = await travelPage.isEmailInputExisting();
        expect(isEmailInputExisting).toBe(true)
        await travelPage.enterEmail(emailValue)
    });

    it("should use custom command", async () => {
        await travelPage.enterEmail(emailValue)
        console.log("Before waiting and clicking...");
        await browser.waitAndClick("#login");
        //how to deal with captcha? cuz technically i am a robot:P
        //await browser.waitAndClick("#recaptcha-anchor");
        await browser.pause(1000);
    });
    it("icon show reveal password", async () => {
        const passwordData =  "123456"
        await travelPage.enterPassword(passwordData);
        const inputValue = await travelPage.getPasswordInputValue();
        expect(inputValue).toEqual(passwordData)
        await travelPage.clickRevealPasswordButton()
        await browser.pause(1000);
    });
    it("forgot password with incorrect email", async () => {
        await $('#main-body > div > div.row > div > form > div > div.card-body.px-sm-5.py-5 > div.form-group.mb-4.focused > div.d-flex.align-items-center.justify-content-between > div > a').click()
        let formHeader = await $("#main-body > div > div.row > div > div > div > div > div > h6");
        await expect(formHeader).toHaveText("Lost Password Reset")
        await $("#inputEmail").setValue("777");
        await browser.pause(1000);
        await browser.keys("\uE007")
        //how to check pop up pn form validation?
        //const validationMessageValue = await $("#inputEmail").getAttribute("validationMessage")
        const validationMessageValue = await browser.execute(() => {
            const inputElement = document.querySelector("#inputEmail");
            return inputElement ? inputElement.validationMessage : null;
        });
        console.log(`validationMessageValue`, validationMessageValue);
        await expect(validationMessageValue.length).toBeGreaterThan(0);
    });

})

