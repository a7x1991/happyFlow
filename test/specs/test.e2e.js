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
        await LoginPage.clickLogOut()
    })
})

describe('Login unsuccessfully', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openUrl()
        await LoginPage.loginFail('standard_userr', 'secret_sauce')
        await expect(LoginPage.errorButton).toBeExisting() 
    })
})

describe('Login successfully', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openUrl()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(LoginPage.shoppingCart).toBeExisting() 
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

describe('Click continue', () => {
    it('should click the continue icon', async () => {
        await LoginPage.clickContinue() 
    })
})