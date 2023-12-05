import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Login successfully', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openUrl()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(LoginPage.shoppingCart).toBeExisting() 
    })
})

describe('Add backpack', () => {
    it('it should click backpack add to cart', async () => {
        await LoginPage.addBackpack()
    })
})

describe('Click shopping cart', () => {
    it('should click the shopping cart icon', async () => {
        await LoginPage.clickShoppingCart()
    })
})

describe('Click checkout', () => {
    it('should click the checkout icon', async () => {
        await LoginPage.clickCheckOut() 
    })
})

describe('Click Burger Menu', () => {
    it('should click the burger menu', async () => {
        await LoginPage.clickHamburgerMenu()
    })
})

describe('Click Logout', () => {
    it('should click Logout icon', async () => {
        await LoginPage.clickLogOut() 
    })
})