/// <reference types="cypress" />

export class productListPage {
    useThumbnail(product) {
        return cy.get(".contentpanel > ul").contains(product).click()
    }

    selectProduct(product) {
        return cy.get(".thumbnail").contains(product).click()
    }    
}