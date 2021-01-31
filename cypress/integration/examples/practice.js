/// <reference types="cypress" />

const { beforeEach } = require("mocha")

describe('Practice testing', () => {

    beforeEach(() => {
        cy.visit('https://www.automationteststore.com/')
    })
    it('Handle new window', () => {
        const twitter = 'twitter.com'
        cy.get('.header_block .social_icons .twitter').invoke('removeAttr', 'target').click({ force: true }) // with invoke we remove the target attribute
        cy.location().should((loc) => expect(loc.hostname).to.eql(twitter))
    })
    it('Navigate to page', () => {

        cy.get('.subnav').contains('Makeup').click({ force: true })
        cy.get('.maintext').should('have.text', 'Makeup')
        cy.get('.fixed').contains('Viva Glam Lipstick').click()
        cy.xpath("//h1[@class='productname']").should('have.text', 'Viva Glam Lipstick')
        cy.get('.productfilneprice').invoke('text').as('price') //alias
        cy.get('@price').should('include', '$5.00')

    })
    it('Navigate to home page', () => {

        //cy.get('#categorymenu a').contains('Home').click()
        cy.get('.thumbnail').as('thumbnail') //alias
        cy.get('@thumbnail').should('have.length', 16)
        cy.get('@thumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart') //assert title attribute of productcart class
        cy.get('@thumbnail').find('.oneprice').as('regularPrice').should('have.length.at.least', 9 )
        cy.get('@regularPrice').each(($el, index, $list) => {

            let countPrice = parseFloat($el.text().slice(1))
            countPrice += countPrice
            cy.log('final count is ' + countPrice)
        })

    })

})