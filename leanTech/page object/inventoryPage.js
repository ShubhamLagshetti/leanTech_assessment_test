export class InventoryPage {

    get addToCartButtons() { return $$("//button[normalize-space()='Add to cart']")}
    get cartLink() { return $("//a[@class='shopping_cart_link']"); }

    async addRandomItemsToCart(count) {
        const buttons = await this.addToCartButtons;
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * buttons.length);
            await buttons[randomIndex].click();
            buttons.splice(randomIndex, 1); 
        }
    }

    async goToCart() {
        await this.cartLink.click();
    }
}

