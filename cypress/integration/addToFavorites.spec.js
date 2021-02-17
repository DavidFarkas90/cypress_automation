/// <reference types="cypress" />

describe("Add product to favorites", () => {
    before(() => {
        cy.visit("https://www.hema.nl/")
        cy.get(".js-close-cookies").contains("OK en sluiten").click()
    })
    it("Select a product and add to favorites from PDP", () => {
        cy.selectCategory("heren", "overhemden")
        cy.get("h1.filters-heading").should("have.text", "overhemden")
        cy.selectProduct(2)
        cy.get("div.btns-wrap i.icon-heart").click()
        cy.get("span.favorites-number").should("have.text", "(1)1")

        //cy.get("#add-to-cart").should("have.css", "background-color").and('be.colored', '#f8b840')
        //cy.get(".icon-heart").should("have.css", "color", "rgb(218,45,42)")
    })
    it("Remove product from favorites PDP", () => {
        cy.get("div.btns-wrap i.icon-heart").click()
        cy.get(".favorites-wrap").trigger("mouseover").contains(".empty-text", "wat vind jij leuk?").should("be.visible")
    })
    it("Select a product and add to favorites from PLP", () =>{
        cy.get(".categories-wrap button").trigger('mouseover')
        cy.selectCategory("dames", "nachthemden")
        cy.get('.capture h1').contains('nachthemden')
        cy.selectFavorites(3)
        cy.get("span.favorites-number").should("have.text", "(1)1")
    })
    it("Remove product from favorites PLP", () => {
        cy.selectFavorites(3)
        cy.get(".favorites-wrap").trigger("mouseover").contains(".empty-text", "wat vind jij leuk?").should("be.visible")
    })
})