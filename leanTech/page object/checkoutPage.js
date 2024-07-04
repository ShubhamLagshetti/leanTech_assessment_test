export class CheckoutPage {
    get firstNameInput() { return $("//input[@id='first-name']"); }
    get lastNameInput() { return $("//input[@id='last-name']"); }
    get postalCodeInput() { return $("//input[@id='postal-code']"); }
    get continueButton() { return $("//input[@id='continue']"); }
    get finishButton() { return $("//button[normalize-space()='Finish']"); }
    get completeHeader() { return $("//h2[@class='complete-header']"); }

    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}

