/// <reference types="cypress" />

describe('', () => {
    beforeEach(() => {
        cy.setCookie('cookies_accepted', '1')
    })

    before(() => {
        cy.visit("https://www.hema.nl/")
    })
    it('Testing something', () => {
        cy.get('#searchKey').type('Groningen').type('{enter}')
        
    });
    it("Second test", () => {
        cy.get("li.store").should("have.length", 7).each(($el) => {
            cy.log("Stores " + cy.wrap($el.text()))
            
        })
    })
    it('Third test', () => {
        cy.get('.js-selected-store-opening-hours').should("have.length", 7)
        .each(($day) => {
            cy.log("Opening days are: " + cy.wrap($day.text()))
        })

    });
});