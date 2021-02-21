// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("assertTitle", (expectedTitle) => {
    cy.get('h1').should('have.text', expectedTitle)
})

Cypress.Commands.add("genEmail", () => {
    var num = Math.floor(Math.random() * 10) + 1;
    var email = 'd.far' + num + '@gmail.com';
    return email
})
Cypress.Commands.add("quickViewProduct", (product) => {
    cy.xpath(".//div[@class='product-container'][" + product + "]//div//button").click({force: true})
})
Cypress.Commands.add("selectProduct", (product) => {
    cy.xpath(".//div[@class='product-container'][" + product + "]//div/a[@class='js-product-link']").click({force: true})
})
Cypress.Commands.add("selectFavorites", (product) => {
    cy.xpath(".//div[@class='product-container'][" + product + "]//div[@class='product js-gtmproduct']/a").click()
})
Cypress.Commands.add("selectCategory", (mainCatgeory, subCategory) => {
    cy.get(".categories-wrap").trigger("mouseover").find("[class='category-tree clearfix']").contains(mainCatgeory).
    trigger("mouseover").parent().find("[class='group has-children']").contains(subCategory).click({force: true})
})

Cypress.Commands.add("removeFromFavorites", (product) => {
    cy.get(".favorites-wrap").trigger("mouseover").find(".product-item").contains(product).parent().find(".remove-basket-product").click({force: true})
})
