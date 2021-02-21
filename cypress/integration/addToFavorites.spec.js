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

    it("Navigate to QVP and add product to favorites", () => {
        cy.selectCategory("wonen en slapen", "kandelaar")
        cy.get(".capture h1").contains("kandelaar")
        cy.quickViewProduct(3)
        cy.get(".btns-wrap .js-favorites-heart").click().should("have.class", "js-favorites-heart added red-heart")
    })

    it("Remove product from favorites QVP", () => {
        cy.get(".btns-wrap .js-favorites-heart").click().should("not.have.class", "js-favorites-heart added red-heart")
    })

    it("Add product to favorites and remove it from favorites dropdown", () =>{
        cy.selectCategory("dames", "badmode")
        cy.get('.filter-wrapper h1').contains('badmode')
        cy.selectFavorites(2)
        cy.selectFavorites(3)
        cy.get("span.favorites-number").should("have.text", "(2)2")
        cy.removeFromFavorites("dames bikinibroekje - animal")
        cy.get(".favorites-wrap").trigger("mouseover", {force: true}).find(".product-info .title").should("not.have.text", "dames bikinibroekje - animal")
    })
})