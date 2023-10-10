browser.addCommand("waitAndClick", async function (selector, expectedUrl) {
  const element = $(selector);
  element.waitForDisplayed();
  element.waitForClickable({ timeout: 3000 });
  element.click();
  const currentUrl = await browser.getUrl();
  expect(currentUrl).toEqual(expectedUrl);
});
// https://docs.google.com/spreadsheets/d/1kFkc7CKAPNFUw_gajtFJwmSVhJUcVjEuPNESeR4pxuI/edit#gid=0

describe("php travels cases", () => {
  const emailValue = "test@gmail.com";

  beforeEach(() => {
    browser.url("https://phptravels.org/login");
    browser.setWindowSize(1920, 1600);
  });

  it("should fill email input", async () => {
    const emailInput = await $("#inputEmail");
    await expect(emailInput).toBeExisting();
    await emailInput.setValue(emailValue);
  });

  it("should use custom command", async () => {
    const emailInput = await $("#inputEmail");
    await expect(emailInput).toBeExisting();
    await emailInput.setValue(emailValue);
    const frame = await $('iframe[title="reCAPTCHA"]');
    await browser.switchToFrame(frame);
    const checkbox = await $("span[role='checkbox']");
    await checkbox.click();
    await browser.waitAndClick("#login", "https://phptravels.org/login");
    // how to deal with captcha? cuz technically i am a robot:P
    // await browser.waitAndClick("#recaptcha-anchor");
  });
  it("icon show reveal password", async () => {
    const passwordData = "123456";
    const passwordInput = await $("#inputPassword");
    await passwordInput.setValue(passwordData);
    expect(passwordInput).toHaveValue(passwordData);
    await $(
      '//*[@role="form"]//*[@class="input-group-append"]//button'
    ).click();
  });
  it("forgot password with incorrect email", async () => {
    await $('//*[@role="form"]//*[@class="mb-2"]//a').click();
    const formHeader = await $(
      "//*[@id='main-body']//*[@class='mb-4']//*[@class='h3']"
    );
    await expect(formHeader).toHaveText("Lost Password Reset");
    await $("#inputEmail").setValue("777");
    await browser.pause(1000);
    await browser.keys("\uE007");

    const validationMessageValue = await browser.execute(() => {
      const inputElement = document.querySelector("#inputEmail");
      return inputElement ? inputElement.validationMessage : null;
    });
    await expect(validationMessageValue.length).toBeGreaterThan(0);
  });
});
