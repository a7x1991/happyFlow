import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('[type="submit"]');
    }

    get shoppingCart () {
        return $('.shopping_cart_link');
    }
   
    get addToCartBackpack () {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get CheckOut () {
        return $('#checkout');
    }

    get BurgerMenu () {
        return $('#react-burger-menu-btn')
    }

    get logOut () {
        return $('#logout_sidebar_link')
    }

    get allItems () {
        return $('#inventory_sidebar_link')
    }


    async login (username, password) {

        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await expect(this.shoppingCart).toBeExisting();

    }

    async addBackpack() {
        await expect(this.addToCartBackpack).toBeExisting();
        await this.addToCartBackpack.click();
        
    }

    async clickShoppingCart() {
        await expect(this.shoppingCart).toBeExisting();
        await this.shoppingCart.click();
        
    }

    async clickCheckOut() {
        await expect(this.CheckOut).toBeExisting();
        await this.CheckOut.click();
    }

    async clickHamburgerMenu() {
        await expect(this.BurgerMenu).toBeExisting();
        await this.BurgerMenu.click();
        await expect(this.allItems).toBeClickable();

    }

    async clickLogOut() {
        await expect(this.logOut).toBeExisting();
        await this.logOut.click();
    }

    

    open () {
        return super.open();
    }
}




export default new LoginPage();
