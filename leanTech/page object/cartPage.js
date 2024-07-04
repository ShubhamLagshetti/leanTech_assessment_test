export class CartPage {
    get cartItems() { return $$("//div[@class='cart_item']"); }
    get checkoutButton() { return $("//button[@id='checkout']"); }

    async getCartItemsCount() {
        return await this.cartItems.length;
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}