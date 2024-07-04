
import { CartPage } from '../page object/cartPage.js';
import { CheckoutPage } from '../page object/checkoutPage.js';
import { InventoryPage } from '../page object/inventoryPage.js';
import { LoginPage } from '../page object/loginPage.js';
// import { expect } from 'chai';


const loginPage = new LoginPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()
const inventoryPage = new InventoryPage()


describe('Test Sauce Labs Checkout Flow', () => {
    it('User can complete checkout with 3 random items', async () => {

        await loginPage.openSauceLabs();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        await inventoryPage.addRandomItemsToCart(3);
        await inventoryPage.goToCart();

        const cartItemCount = await cartPage.getCartItemsCount();
        expect(cartItemCount).toBeElementsArrayOfSize(3);

        await cartPage.proceedToCheckout();
        await checkoutPage.fillCheckoutInformation('rohit', 'pune', '12345');

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        await checkoutPage.finishCheckout();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    });
});
