describe('P30 Test', () => {
    beforeEach(() => {
        cy.setCookie('cookies_accepted', '1')
    })
    // it('Test for AB test P30', () => {
    //     Cypress.Cookies.debug(true)
    //     cy.visit("https://automationteststore.com/")
    //     cy.get("#customer_menu_top a").contains("Login").click()
        
    //     cy.get("#loginFrm_loginname").type("dfar90")
    //     cy.get("#loginFrm_password").type("d0611185304")
    //     cy.get(".btn-orange").contains("Login").click()
    //     cy.url().should("include", "account")
    //     cy.getCookie('customer', {log: true}).then(($cookie) => {
    //         cy.log("This is my cookie value: " + $cookie.value)
    //     })

    // });
    // it('Test for BA test P30', () => {
    //     cy.get(".myaccountbox li i").contains("  Change password").click()
    //     cy.url().should("include", "wishlist")
    // });
    it('Test for CA test P30', () => {
        cy.visit("https://www.hema.nl/")
        
        cy.getCookie('cookies_accepted').then(($cookie) => {
            cy.log("This is my cookie value: " + $cookie.value)
            expect($cookie.value).to.equal('1')
        })
        cy.getCookie('userId').then(($cookie) => {
            cy.log("This is my user value: " + $cookie.value)
            //Cypress.Cookies.preserveOnce('userId')
        })
        cy.url().should("include", "hema")
    });
    // it('Test for DB test P40', () => {
    //     cy.visit("https://www.hema.nl/")
    //     cy.url().should("include", "hema")
    // });
    // it('Test for EF test P40', () => {
    //     cy.visit("https://www.hema.nl/")
    //     cy.url().should("include", "hema")
    // });
});