/// <reference types="cypress" />

//Needed values for test
const bakery = "taart, eten en drinken"
const photoCake = "fototaart"
const image = "Simpsons.jpg"

describe("Cake editing", () => {
    before(() => {
      cy.setCookie('cookies_accepted', '1')
      cy.visit("https://www.hema.nl/")
    })
    it("Upload photo to cake editor", () => {
        cy.selectCategory(bakery, photoCake)
        cy.get('.capture h1').contains(photoCake).should("have.text", "\nfototaart\n")
        cy.selectProduct(1)
        cy.get("#add-to-cart").contains("ontwerp je taart").click()
        cy.contains("div.tools li", "foto").click()
        cy.get("[type='file']").attachFile(image).then(()=>{
          cy.get(".image-link img").should("be.visible")
          cy.xpath(".//ul[@class='clearfix']/li[2]").click()
          cy.get(".toolbox-actions .icon-small").should("be.visible").click()
        })
        cy.get(".toolbox-actions .white").should("be.visible").click()
        cy.get(".image-wrap").should("not.be.empty").and("be.visible")
    })
    it("Remove photo from the cake", () => {
        cy.get(".layout-holder .cake-object").click()
        cy.get("#jsEditorOptionsViewModel h3").should("have.text", "foto bewerken")
        cy.contains(".scroll-element .icon-text", "verwijderen").click()
        cy.get("#jsConfirmationPopupViewModel .modal h3").should("have.text", "foto verwijderen")
        cy.get("#jsConfirmationPopupViewModel .modal p").should("have.text", "weet je zeker dat je de afbeelding wilt verwijderen?")
        cy.get(".btns-wrap a").contains("annuleren").click()

        cy.contains(".scroll-element .icon-text", "verwijderen").click()
        cy.get(".btns-wrap a").contains("verwijderen").click()
        cy.get(".layout-holder").should("be.visible")
    })
    it("Add background to cake", () => {

        // cy.selectCategory(bakery, photoCake)
        // cy.get('.capture h1').contains(photoCake).should("have.text", "\nfototaart\n")
        // cy.selectProduct(1)
        // cy.get("#add-to-cart").click()
        cy.contains("div.tools li", "achtergrond").click()
        cy.get(".toolbox-actions").next().contains("achtergrond kiezen")
        cy.get(".vertical-scroll-element li").should("have.length", "5").click()
        //cy.xpath(".//div[@class='vertical-scroll-element']//li[5]//img").click()
        //cy.selectCakeBackground[6]
        cy.get(".toolbox-actions .icon-small").should("be.visible").click()
    })

    // it("Upload 2", () => {
    //     cy.selectCategory(bakery, photoCake)
    //     cy.get('.capture h1').contains(photoCake).should("have.text", "\nfototaart\n")
    //     cy.selectProduct(2)
    //     cy.get("#add-to-cart").click()
    //     cy.contains("div.tools li", "foto").click()
    //     cy.fixture("Simpsons.jpg", "base64").then(fileContent => {
    //         cy.get("[type='file']").attachFile(
    //             {
    //                 fileContent,
    //                 fileName: "Simpsons.jpg",
    //                 mimeType: "image/jpg"
    //             },
    //             {
    //                 uploadType: "input"
    //             }
    //         )
    //     })
    // })
})
