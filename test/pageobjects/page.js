import { browser } from '@wdio/globals'

export default class Page {
  
    openUrl () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
