/// <reference types="cypress" />

import LoginPage from '../page/homePage'

describe('POM practice test', () => {
    const loginPage = new LoginPage()
    const makeUp = 'Makeup'
    const lipstick = 'Viva Glam Lipstick'
    it('Open home page and navigate to Make up', () => {
        loginPage.visitHomePage()
        loginPage.useMainNavigation(makeUp)
        loginPage.assertMainHeader(makeUp)
        //loginPage.getMainHeader().should('have.text', makeUp)
    })
    it('Select product and assert price', () => {
        loginPage.getProduct(lipstick)
        loginPage.getProductName().should('have.text', lipstick)
        
    })

})