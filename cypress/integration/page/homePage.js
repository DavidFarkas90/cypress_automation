/// <reference types="cypress" />

class homePage {
    visitHomePage() {
        cy.visit('https://www.automationteststore.com/')    
    }
    useMainNavigation(navigateToPage) {
        return cy.get('.subnav').contains(navigateToPage).click({ force: true })
    }
    getMainHeader() {
         return cy.get('.maintext')
    }
    getProduct(productName) {
        return cy.get('.fixed').contains(productName).click()
    }
    getProductName() {
        return cy.xpath("//h1[@class='productname']")
    }
    getProductPrice() {
        return cy.get('.productfilneprice')
    }
    assertMainHeader(expectedValue) {
        return this.getMainHeader().should('have.text', expectedValue)
    }
}
export default homePage