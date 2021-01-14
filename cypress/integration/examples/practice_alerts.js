/// <reference types="cypress" />

describe('Handle pop-ups', () =>{
    it('Navigate to page and click on pop-up and cancel', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/Popup-Alerts')
        cy.get('#button4').click()
        cy.on('window:confirm', (press) => {
            return false;
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')

    })
    it('Click on alert and assert text', () => {
        cy.get('#button1').click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.eql('I am an alert box!')
        })
    })

    it.only('Handle alert with stub', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
        })
    })
})