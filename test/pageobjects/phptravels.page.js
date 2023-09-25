class travelPage{
    get emailInput(){
        return $("#inputEmail")
    }
    get passwordInput(){
        return $("#inputPassword")
    }
    get revealPasswordButton(){
        return  $('#main-body > div > div.row > div > form > div > div.card-body.px-sm-5.py-5 > div.form-group.mb-4.focused > div.input-group.input-group-merge > div.input-group-append > button')
    }
    async isEmailInputExisting(){
        return await this.emailInput.isExisting()
    }
    async enterEmail(email){
        await this.emailInput.setValue(email)
    }
    async enterPassword(password){
        return await this.passwordInput.setValue(password)
    }
    async getPasswordInputValue(){
        return await this.passwordInput.getValue();
    }
    async clickRevealPasswordButton(){
        return await this.revealPasswordButton.click()
    }
}
module.exports = new travelPage()