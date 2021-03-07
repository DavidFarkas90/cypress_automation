/// <reference types="cypress" />

describe('', () => {

    before(() => {
        cy.visit("https://www.hema.nl/")
        // const $cookie = Cypress.$('#EBG_258_accept')
        // const $ok = Cypress.$('.js-close-cookies')
        // if ($cookie.length) {
        //   cy.log('Accepting cookies')
        //   cy.get('##EBG_258_accept')
        //     .contains('accepteren')
        //     .click()
        // }else if ($ok.length) {
        //     cy.log('Accepting old cookies')
        //     cy.get('.hidden-on-mobile button')
        //         .contains('OK en sluiten')
        //         .click()
        // }
        // else (cy.log('Running cypress'))

        cy.get("body").then(($body) => {
            if($body.find("#EBG_258_accept").length > 0) {
                cy.log("first")
                cy.get("#EBG_258_accept").click({force: true})
            }
            else if (
                $body.find(".hidden-on-mobile .js-close-cookies").length > 0) {
                    cy.log("Second")
                    cy.get(".hidden-on-mobile .js-close-cookies").click()
            }
            else(cy.log('Third'))
        })  
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