/// <reference types="cypress" />

//Needed values for test
const bakery = "taart, eten en drinken"
const photoCake = "fototaart"
const image = "Simpsons.jpg"

describe("Cake editing", () => {
    before(() => {
        cy.visit("https://www.hema.nl/")
        cy.request("/")
      .its('body')
      .then(html => {
        const acceptBtn = Cypress.$(html).find("[id='EBG_258_accept']")
        if(acceptBtn.is(":visible") === true) {
          cy.log("Accept button is visible")
          cy.wrap(acceptBtn).click()
        }
        else (cy.get(".hidden-on-mobile .js-close-cookies").click())
        //cy.wrap($titleHomePage).click();
      })
        // cy.get(".container").then(() => {
            
        //     if (acceptBtn.is(':visible')){
        //       //you get here only if button is visible
        //       cy.wrap(acceptBtn).click()
        //     }
        //   })
    })
    it.only("Upload photo to cake editor", () => {
        cy.selectCategory(bakery, photoCake)
        cy.get('.capture h1').contains(photoCake).should("have.text", "\nfototaart\n")
        cy.selectProduct(1)
        cy.get("#add-to-cart").click()
        cy.contains("div.tools li", "foto").click()
        cy.get("[type='file']").attachFile(image)
        cy.wait(5000)
        cy.get(".image-link img").should("be.visible")
        cy.xpath(".//ul[@class='clearfix']/li[2]").click()
        cy.get(".toolbox-actions .icon-small").should("be.visible").click()
        cy.get(".toolbox-actions .white").should("be.visible").click()
        cy.get(".image-wrap").should("not.be.empty").and("be.visible")
    })
    it("Remove photo from the cake", () => {
        cy.get(".layout-holder .cake-object").click()
        cy.contains(".scroll-element .icon-text", "verwijderen").click()
        cy.get("#jsConfirmationPopupViewModel .modal h3").should("have.text", "foto verwijderen")
        cy.get("#jsConfirmationPopupViewModel .modal p").should("have.text", "weet je zeker dat je de afbeelding wilt verwijderen?")
        cy.get(".btns-wrap a").contains("annuleren").click()

        cy.contains(".scroll-element .icon-text", "verwijderen").click()
        cy.get(".btns-wrap a").contains("verwijderen").click()
        cy.get(".layout-holder").should("be.visible")
    })
    it.only("Add background to cake", () => {

        cy.selectCategory("heren", "jassen")
        // cy.get(".categories-wrap button").trigger("mouseover").click()
        // .parent().find("ul.category-tree li a").contains("heren").trigger("mouseover")
        // .parent().find("ul.link-groups li a").contains("jassen").click({force: true})

        // cy.selectCategory(bakery, photoCake)
        // cy.get('.capture h1').contains(photoCake).should("have.text", "\nfototaart\n")
        // cy.selectProduct(1)
        // cy.get("#add-to-cart").click()
        // cy.contains("div.tools li", "achtergrond").click()
        // cy.get(".toolbox-actions").next().contains("achtergrond kiezen")
        // cy.xpath(".//div[@class='vertical-scroll-element']//li[6]//img").click()
        // //cy.selectCakeBackground[6]
        // cy.get(".toolbox-actions .icon-small").should("be.visible").click()
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
