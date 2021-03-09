describe('P30 Test', () => {
    it('Test AD P30', () => {
        Cypress.Cookies.debug(true)
        cy.visit("https://automationteststore.com/")
        cy.get("#customer_menu_top li").contains("Login").click()
        cy.get("#loginFrm_loginname").type("dfar90")
        cy.get("#loginFrm_password").type("d0611185304")
        cy.get("[title='Login']").click()
        cy.get(".heading1 .subtext").should("have.text", "David")
        cy.get(".categorymenu a").contains("Skincare").click()
        cy.get("h1 .maintext").should("have.text", "Skincare")
        cy.get("#appendedInputButton").type("something").should("have.value", "something")
        cy.getCookie("customer").then(($cookie) => {
            cy.log("My cookie is: " + $cookie.value)
            Cypress.Cookies.preserveOnce('customer')
        })
        
    });
    it("Second test", () => {
        cy.get(".categorymenu a").contains("Makeup").click()
        cy.get("h1 .maintext").should("have.text", "Makeup")
        cy.get("#appendedInputButton").type("something").should("have.value", "something")
        cy.get("div.menu_text").should("have.text", "Welcome back David")
        cy.getCookie("customer").then(($cookie) => {
            cy.log("My cookie is: " + $cookie.value)
        })
    })
});