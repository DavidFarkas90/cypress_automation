/// <reference types="cypress" />

//Needed values for test
const bakery = "taart, eten en drinken"
const photoCake = "fototaart"
const image = "Simpsons.jpg"

describe("Cake editing", () => {
    before(() => {
        cy.clearCookies()
        cy.visit("https://www.hema.nl/")
    })
    it.only("Upload photo to cake editor", () => {
        cy.selectCategory(bakery, photoCake)
        cy.get('.capture h1').contains(photoCake).should("have.text", "\nfototaart\n")
        cy.selectProduct(2)
        cy.get("#add-to-cart").click()
        cy.contains("div.tools li", "foto").click()
        cy.get("[type='file']").attachFile(image)
        cy.get(".image-link img").should("be.visible")
    })

    it("Upload 2", () => {
        cy.selectCategory(bakery, photoCake)
        cy.get('.capture h1').contains(photoCake).should("have.text", "\nfototaart\n")
        cy.selectProduct(2)
        cy.get("#add-to-cart").click()
        cy.contains("div.tools li", "foto").click()
        cy.fixture("Simpsons.jpg", "base64").then(fileContent => {
            cy.get("[type='file']").attachFile(
                {
                    fileContent,
                    fileName: "Simpsons.jpg",
                    mimeType: "image/jpg"
                },
                {
                    uploadType: "input"
                }
            )
        })
    })
})
