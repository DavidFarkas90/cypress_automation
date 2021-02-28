/// <reference types="cypress" />

describe('P20 test', () => {
    it('Test for P20', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
});