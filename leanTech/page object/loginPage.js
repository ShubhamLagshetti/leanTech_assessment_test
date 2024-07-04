
export class LoginPage {

    get userNameInput() {
        return $("#user-name")
    }

    get passwordInput() {
        return $("#password")
    }

    get loginButton(){
        return $('#login-button')
    }

    async openSauceLabs() {
        await browser.url('/')
    }

    async login(username, password) {
        await this.userNameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
        
    }
}
