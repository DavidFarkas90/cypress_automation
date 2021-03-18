/// <reference types="cypress" />

const bakery2 = "taart en gebak"
const bakery = "taart, eten en drinken"
const pastry = "gebak"
const photoCake = "fototaart"
const image = "Simpsons.jpg"
const sticker = "stickers"
const background = "achtergrond"
const photo = "foto"
const text = "tekst"
const demo = "This is a demo presentation"

describe("Cake editor mobile", () => {

    before(() => {
        cy.setCookie('cookies_accepted', '1')
        cy.visit("https://www.hema.nl/")
    })
    beforeEach(() => {
        cy.viewport("iphone-8")
    })
    it("Upload a photo to cake", () => {
        cy.get(".hamburger").click().parent().next().next()
        .find("ul[class='category-tree clearfix']").contains(bakery).click({force: true})
        .parent().find("[class='clearfix link-groups']").contains(pastry).click({force: true})
        .parent().find("[class='level-3 sliding-menu open']").contains(photoCake ).click({force: true})

        cy.get('.capture h1').contains(photoCake).should("have.text", "\nfototaart\n")
        cy.selectProduct(1)
        cy.get("#add-to-cart").contains("ontwerp je taart").click()
        cy.selectEditor(photo)
        cy.get(".toolbox-actions").next().should("have.text", "foto toevoegen")
        cy.uploadImage(image)
        cy.get(".toolbox-actions .white").should("be.visible").click()
        cy.get(".image-wrap").should("not.be.empty").and("be.visible")

    })
    it("Remove image from cake", () => {
        cy.get(".layout-holder .cake-object").click()
        cy.get(".toolbox-actions").next().should("have.text", "foto bewerken")
        cy.contains(".scroll-element .icon-text", "verwijderen").click()
        cy.get("#jsConfirmationPopupViewModel .modal h3").should("have.text", "foto verwijderen")
        cy.get("#jsConfirmationPopupViewModel .modal p").should("have.text", "weet je zeker dat je de afbeelding wilt verwijderen?")
        cy.get(".btns-wrap a").contains("annuleren").click()

        cy.contains(".scroll-element .icon-text", "verwijderen").click()
        cy.get(".btns-wrap a").contains("verwijderen").click()
        cy.get(".layout-holder .cake-object").should("not.exist")
    })
    it("Add background to cake", () => {
        cy.selectEditor(background)
        cy.get(".toolbox-actions").next().contains("achtergrond kiezen")
        cy.get(".vertical-scroll-element li").eq("9").click()
        cy.get(".toolbox-actions .icon-small").should("be.visible").click()
        cy.get("#cake-canvas .cake-bg").should("have.attr", "style").then(($imgUrl) => {
            
            expect($imgUrl).to.contain("background-image")
        })
        
    })
    it("Remove background from cake", () => {

        cy.selectEditor(background)
        cy.get(".toolbox-actions").next().contains("achtergrond kiezen")
        cy.get(".vertical-scroll-element li").contains("geen achtergrond").click()
        cy.get(".toolbox-actions .icon-small").should("be.visible").click()
        cy.get("#cake-canvas .cake-bg").should("not.exist")
    })
    it("Add stickers  to cake", () => {

        cy.selectEditor(sticker)
        cy.get(".toolbox-actions").next().contains("sticker kiezen")
        cy.get(".vertical-scroll-element li").eq("5").click()
        cy.get(".toolbox-actions .icon-small").should("be.visible").click().then(() => {
            cy.get(".toolbox-actions").next().should("have.text", "sticker bewerken")
            cy.get(".toolbox-actions .white").should("be.visible").click()
        })
        cy.get(".sticker-wrap").should("not.be.empty").and("be.visible")
        
    })

    it("Remove sticker from cake", () => {
        cy.get(".sticker-wrap img").click()
        cy.get(".toolbox-actions").next().contains("sticker bewerken")
        cy.contains(".scroll-element .icon-text", "verwijderen").click()
        cy.get(".btns-wrap a").contains("verwijderen").click()
        cy.get(".sticker-wrap img").should("not.exist")
    })

    it("Add text  to cake", () => {

        cy.selectEditor(text)
        cy.get(".toolbox-actions").next().contains("tekst toevoegen")
        cy.get("#cake-text").type(demo).should("have.value", demo)
        cy.get(".toolbox-actions .icon-small").should("be.visible").click().then(() => {
            cy.get(".toolbox-actions").next().should("have.text", "tekst bewerken")
            cy.get(".toolbox-actions .white").should("be.visible").click()
        })
        cy.get(".text-wrap span").should("contain.text", demo).and("be.visible")
        
    })

    it("Remove text from cake", () => {
        
        cy.get(".text-wrap span").contains(demo).click()
        cy.get(".toolbox-actions").next().contains("tekst bewerken")
        cy.contains(".scroll-element .icon-text", "verwijderen").click()
        cy.get(".btns-wrap a").contains("verwijderen").click()
        cy.get(".text-wrap span").should("not.contain.text", demo)
    })
})