/// <reference types="cypress" />

describe("Add product to favorites", () => {

    before(() => {
        cy.setCookie('cookies_accepted', '1')
        cy.visit("https://www.hema.nl/")
    })
    beforeEach(() => {
        cy.viewport("iphone-8")
    })
    it("Select a product and add to favorites from PDP", () => {
        cy.get(".hamburger").click().parent().next().next()
        .find("ul[class='category-tree clearfix']").contains("dames").click({force: true})
        .parent().find("[class='clearfix link-groups']").contains("lingerie").click({force: true})
        .parent().find("[class='level-3 sliding-menu open']").contains("slips").click({force: true})

        cy.get(".capture h1").should("have.text", "\nslips\n")
        cy.selectProduct(2)
        cy.get("div.btns-wrap i.icon-heart").click()
        cy.get(".mobile-favorites-added").should('be.visible')
        //cy.get("#add-to-cart").should("have.css", "background-color").and('be.colored', '#f8b840')
        //cy.get(".icon-heart").should("have.css", "color", "rgb(218,45,42)")
    })
    it("Remove product from favorites PDP", () => {
        cy.get("div.btns-wrap i.icon-heart").click()
        cy.get("li.favorites-link span").should("have.class", "favorites-number hidden")
    })
    it("Select a product and add to favorites from PLP", () => {

        cy.contains(".wrap", "menu").click()
        .contains(".mobile-category-menu", "dames").click({force: true})
        .contains("nachthemden").click({force: true})
        cy.get('.capture h1').contains('nachthemden')
        cy.selectFavorites(3).then(($el)=>{
            cy.wrap($el).should("have.class", "add-to-favorites js-favorites js-favorites-heart added red-heart")
            cy.get(".mobile-favorites-added").should('be.visible')
        })
        
    })
    it("Remove product from favorites PLP", () => {
        cy.selectFavorites(3).then(($el)=>{
            cy.wrap($el).should("have.class", "add-to-favorites js-favorites js-favorites-heart")
        })
    })
})