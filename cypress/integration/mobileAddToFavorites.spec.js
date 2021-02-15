/// <reference types="cypress" />

describe("Add product to favorites", () => {
    before(() => {
        cy.viewport("iphone-8")
        cy.visit("https://www.hema.nl/")
        cy.get(".show-on-mobile button").click()
    })
    it("Select a product and add to favorites from PDP", () => {
        cy.contains(".wrap", "menu").click()
        .contains(".mobile-category-menu", "kind").click({force: true})
        .contains("tops, shirts en blouses").click({force: true})
        cy.get("h1.filters-heading").should("have.text", "tops, shirts en blouses")
        cy.selectProduct(2)
        cy.get("div.btns-wrap i.icon-heart").click()
        cy.get(".mobile-favorites-added").should('be.visible')
        //cy.get("#add-to-cart").should("have.css", "background-color").and('be.colored', '#f8b840')
        //cy.get(".icon-heart").should("have.css", "color", "rgb(218,45,42)")
    })
    it("Remove product from favorites PDP", () => {
        cy.viewport("iphone-8")
        cy.get("div.btns-wrap i.icon-heart").click()
        cy.get("li.favorites-link span").should("have.class", "favorites-number hidden")
    })
    // it("Select a product and add to favorites from PLP", () =>{
    //     cy.get(".categories-wrap button").trigger('mouseover')
    //     cy.get("div[class='category-menu js-gtm-mainnav'] li a").contains('dames').trigger('mouseover').get('.inner ul li a').contains('nachthemden').click({force: true})
    //     cy.get('.capture h1').contains('nachthemden')
    //     cy.selectFavorites(3)
    //     cy.get("span.favorites-number").should("have.text", "(1)1")
    // })
    // it("Remove product from favorites PLP", () => {
    //     cy.selectFavorites(3)
    //     cy.get(".favorites-wrap").trigger("mouseover").contains(".empty-text", "wat vind jij leuk?").should("be.visible")
    // })
})