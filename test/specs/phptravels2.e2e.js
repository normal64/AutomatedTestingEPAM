describe('php travels cases', () => {
    const emailValue = "test@gmail.com"
    let screenshotIndex = 1;
    
    beforeEach(() => {
        browser.url("https://phptravels.org/login");
        browser.setWindowSize(1920, 1600)
        });
    afterEach(() => {
        const screenshotName = `test/screenshots/screenshotTask3${screenshotIndex}.png`;
        browser.saveScreenshot(screenshotName);
        screenshotIndex++;
    });
    it("nav link should open a related page",async() =>{
        const xPath = '//*[@id="Primary_Navbar-Announcements"]/a';
        await browser.execute((selector) =>{
            const matchingElements = document.evaluate(selector, document, null, XPathResult.ANY_TYPE, null);
            const menuItem = matchingElements.iterateNext();
            if(menuItem){
                menuItem.click()
            }else{
                console.log("Menu element not found");
            }
        },
        xPath
        )
        await browser.waitUntil(async () => {
            const newURL = await browser.getUrl();
            console.log(`newUrl is:`, newURL);
            return newURL !== "phptravels.org/login";
            
        }, {
            timeout: 3000, 
            timeoutMsg: "URL did not change to target value within the specified time"
        });
        await browser.setCookies({
            name: 'Denis',
            value: 'looks for a job',
            secure: true, 
        })
    });
    

})

