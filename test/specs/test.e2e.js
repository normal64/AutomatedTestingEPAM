
describe('My Login application', () => {
    const emailValue = "test@gmail.com"
    beforeEach(() => {
        browser.url("https://demoqa.com/automation-practice-form")
        });
    
    it("should open Practice Form web page", async ()=>{
        browser.setWindowSize(1920, 1600)
        expect(browser).toHaveTitle("DEMOQA")
    })
    it("should fill the form",async ()=>{
        browser.setWindowSize(1920, 1600)
        const emailInput = await $('//*[@id="userEmail"]')
        emailInput.setValue(emailValue)
        await expect(emailInput).toHaveValueContaining(emailValue)
    })
    it("should open check if button is clickable ", async ()=>{
        browser.setWindowSize(1920, 1600)
        const elementsButton = await $('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(1) > span > div')
        await expect(elementsButton).toBeClickable()
    })
    it("last name input should exist", async ()=>{
        browser.setWindowSize(1920, 1600)
        const lastNameInput = await $('#lastName')
        await expect(lastNameInput).toBeExisting()
    })


})

