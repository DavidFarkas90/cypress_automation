/// <reference types="cypress" />

const data = require('../fixtures/teststore.json')

describe("Register account", () => {
    it("Open home page and register account", () => {
        
        var phoneNum = '061' + (Math.floor(Math.random() * 1000) + 100) + (Math.floor(Math.random() * 10000) + 1000)

        cy.visit(data['home-page'])
        cy.get(data['login-or-register-btn']).click()
        cy.get(data['continue-btn']).click()
        cy.get(data['first-name']).type("David").should('have.value', "David")
        cy.get(data['last-name']).type("Farkas").should('have.value', 'Farkas')

        cy.genEmail().then((value) => {
            cy.get(data['email']).type(value).should('have.value', value)
        })
        
        cy.get(data['phone']).type(phoneNum).should('have.value', phoneNum)
    })
})