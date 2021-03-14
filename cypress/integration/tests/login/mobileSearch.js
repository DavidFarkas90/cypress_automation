/// <reference types="cypress" />

const glass = " glas"
const shirt = "shirt"
const noResult = "hfdshfhsdfsf"
const nothingFound = "helaas, er is niets gevonden"
const maybe = "misschien helpt dit je"
const spelling = "Klopt de spelling van je zoekterm?"
const tryLessSpecific = "Probeer een minder specifieke zoekterm. Dan zijn er misschien meer resultaten."
const whatAreYouLookingFor = "Waar ben je naar op zoek?"


describe("Search on mobile", () => {

    before(() => {
        cy.setCookie('cookies_accepted', '1')
        cy.visit("/")
    })
    beforeEach(() => {
        cy.setCookie('cookies_accepted', '1')
        cy.viewport("iphone-8")
    })
    it("No result as search result", () => {
        cy.get(".wrap .search-toggle").click().should("have.class", "open")
        cy.searchForProduct(noResult)
        cy.get(".search-term-title").should("have.text", nothingFound)
        cy.get(".inner-no-results h3").first().should("have.text", maybe)
        cy.get(".ordered li").first().should("contain.text", spelling).next().should("have.text", tryLessSpecific)
    })
    it("Search for product and verify search results", () => {
        cy.get(".wrap .search-toggle").click().should("have.class", "open")
        cy.searchForProduct(glass)
        cy.url().should("contain", "https://www.hema.nl/search?q=+glas&lang=nl_NL")
        cy.get("h1.search-term-title").should("have.text", "gevonden voor " + '"glas"')
        cy.get(".search-result-content .js-gtmproduct .js-product-link img").each(($link) => {
            
            cy.wrap($link).should("have.attr", "title").then(($title) => {
                cy.log("Links are " + $title.value)
                
                //expect($title.text()).to.contain.text(glass)
            })
        })

    })
    it('Search product and dropdown check', () => {
        cy.get(".wrap .search-toggle").click().should("have.class", "open")
        cy.get("#q").clear().type(shirt).should("have.value", shirt)
        cy.get(".js-other-suggestion-link").should("contain.text", shirt).and("have.attr", "href", "https://www.hema.nl/search?q=shirt")
        .find(".js-term").should("have.text", shirt).next().should("have.length.at.least", 1)

        cy.get("a.js-product-suggestion-link").each(($link) => {
            cy.log("Links are " + $link)
            expect(cy.wrap($link).should("contain.html", shirt))
        })

        cy.get(".search-phrase .js-category-suggestion-link").each(($link) => {
            cy.log("suggestion links are " + $link)
            expect(cy.wrap($link).should("contain.html", shirt))
        })
    })
    it('Clear and content check', () => {
        
        cy.get("#q").clear().should("have.attr", "placeholder", whatAreYouLookingFor)
        .type(glass).should("have.value", glass)
        .get(".js-search-clear").should("have.attr", "style", "display: inline-block;")
        cy.get(".js-search-clear").click().should("have.attr", "style", "display: none;")
        .get("#q").should("have.attr", "placeholder", whatAreYouLookingFor)
    })
})