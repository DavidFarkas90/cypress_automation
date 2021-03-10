/// <reference types="cypress" />

const glass = " glas"
const shirt = "shirt"
const noResult = "hfdshfhsdfsf"
const nothingFound = "helaas, er is niets gevonden"
const maybe = "misschien helpt dit je"
const spelling = "Klopt de spelling van je zoekterm?"
const tryLessSpecific = "Probeer een minder specifieke zoekterm. Dan zijn er misschien meer resultaten."
const whatAreYouLookingFor = "Waar ben je naar op zoek?"

describe('Search test', () => {
    beforeEach(() => {
        cy.setCookie('cookies_accepted', '1')
    })
    before(() => {
        cy.visit("/")
        cy.get(".profile-wrap").contains("inloggen").click()
        cy.get("#dwfrm_login").then(($form) => {
            cy.get("#dwfrm_login_username_default").type("hemaGB_testUser01@gmail.com")
            cy.get("#dwfrm_login_password_default").type("Hema.9876543210")
            cy.wrap($form).click()
            cy.get("[name='dwfrm_login_login']").click()
        })
    })
    // it('Check cookies', () => {
    //     cy.visit("/")
        
    //     cy.getCookie('cookies_accepted').then(($cookie) => {
    //         cy.log("This is my cookie value: " + $cookie.value)
    //         expect($cookie.value).to.equal('1')
    //     })
    //     cy.getCookie('userId').then(($cookie) => {
    //         cy.log("This is my user value: " + $cookie.value)
    //         //Cypress.Cookies.preserveOnce('userId')
    //     })
    //     cy.url().should("include", "hema")
    // });
    it("No search results", () => {
        cy.searchForProduct(noResult)
        cy.get(".search-term-title").should("have.text", nothingFound)
        cy.get(".inner-no-results h3").first().should("have.text", maybe)
        cy.get(".ordered li").each(($text) => {
            expect(cy.wrap($text).should("contain.text", spelling))
        })
    })
    it('Search product', () => {
        
        cy.searchForProduct(shirt)
        cy.get(".js-other-suggestion-link").should("contain.text", shirt).and("have.attr", "href", "https://www.hema.nl/search?q=shirt")
        .find(".js-term").should("have.text", shirt).next().should("have.text", "(568)")

        cy.get("a.js-product-suggestion-link").each(($link) => {
            cy.log("Links are " + $link)
            expect(cy.wrap($link).should("contain.html", shirt))
        })

        cy.get(".search-phrase .js-category-suggestion-link").each(($link) => {
            cy.log("suggestion links are " + $link)
            expect(cy.wrap($link).should("contain.html", shirt))
        })
    });
    it('Clear and content check', () => {
        cy.get("#q").should("have.attr", "placeholder", whatAreYouLookingFor)
        .type(product).should("have.value", product)
        .get(".js-search-clear").should("have.attr", "style", "display: inline-block;")
        cy.get(".js-search-clear").click().should("have.attr", "style", "display: none;")
        .get("#q").should("have.attr", "placeholder", whatAreYouLookingFor)
    });
});