/// <reference types="cypress" />

describe('P20 test', () => {
    beforeEach(() => {
        cy.setCookie('cookies_accepted', '1')
    })
    before(() => {
        cy.visit("/")
    })
    it('Test for P20', () => {
        cy.visit("https://www.hema.nl/")
        cy.get(".profile-wrap").contains("inloggen").click()
        cy.get("#dwfrm_login_register").within(($reg) => {
            cy.get("#dwfrm_preregister_username_default").type("testemail.123455@gmail.com")
            cy.get("[name='dwfrm_preregister_register']").click()
        })
        cy.get("#RegistrationForm").then(($reg) => {
            
        })
    });
});