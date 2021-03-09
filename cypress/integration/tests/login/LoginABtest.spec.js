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
    it('Check cookies', () => {
        cy.visit("/")
        
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
    it('Search', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
        cy.get("#q").type("shirt").should("have.value", "shirt")
        cy.get(".js-other-suggestion-link").should("contain.text", "shirt").and("have.attr", "href", "https://www.hema.nl/search?q=shirt")
        .find(".js-term").should("have.text", "shirt").next().should("have.text", "(568)")

        cy.get("a.js-product-suggestion-link").each(($link) => {
            cy.log("Links are " + $link)
            expect(cy.wrap($link).should("contain.html", "shirt"))
        })

        cy.get(".search-phrase .js-category-suggestion-link").each(($link) => {
            cy.log("suggestion links are " + $link)
            expect(cy.wrap($link).should("contain.html", "shirt"))
        })
    });
    it('Reset', () => {
        cy.get(".js-search-clear").click()
        cy.get(".js-search-clear").should("have.attr", "style", "display: none;")
    });
});