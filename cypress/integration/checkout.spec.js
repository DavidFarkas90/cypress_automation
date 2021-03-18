/// <reference types="cypress" />

const shirts = "shirts en polo's"
const mens = "heren"
const size = "L"
const quantity = "3"
const store = "Dierenriemstraat 136 Groningen"
const mr = "da heer"
const firstname = "Tester"
const lastname = "Testing"
const email = "testser01@gmail.com"
const phoneNum = "06111884466"
const pickUpAtHema = "afhalen bij HEMA"
const houseDelivery = "bezorgen in Nederland"

describe('Checkout flow', () => {
    before(() => {
        cy.setCookie('cookies_accepted', '1')
        cy.visit("https://www.hema.nl/")
    })
    it('Add product to cart', () => {
        cy.selectCategory(mens, shirts)
        cy.get('h1.filters-heading').should("have.text", "t-shirts en polo's")
        cy.selectProduct(2)
        let productName = cy.get(".product-title-price h1").invoke("text")
        cy.selectSize(size).then(() => {
            cy.get("#Quantity").should("not.have.attr", "disabled", "disabled")
        })
        cy.selectQuantity(quantity)
        cy.get("#add-to-cart").click()
        cy.get(".minicart-totals a").click()

        //Checkout Cart
        cy.get(".page-title").should("have.text", "winkelmandje")
        cy.get(".basket-items .cho-clo").first().should("contain.text", "\n\t\t\theren t-shirt slim-fit - wit - L\n\t\t")
        cy.get("#checkout-form .proceed-checkout").click()
        cy.get("#dwfrm_guestlogin").click()

        //Checkout Shipping
        cy.get(".page-title").should("have.text", "de levering van je bestelling")
        cy.get("#dwfrm_shippingmethods .radio-check label").contains(pickUpAtHema).click()
        cy.get(".js-choose-store-address").click()
        cy.get("#dwfrm_storelocator_postalCode").type(store).should("have.value", store)
        cy.get(".js-storelocator-search").click().then(() => {
            cy.get(".js-store-list li .store-heading label").contains(store).should("have.text", store).click()
        })
        cy.get(".address-border p").first().should("contain.text", store)
        cy.get("button[name='dwfrm_shippingmethods_save']").click()

        //Checkout Information
        cy.get(".page-title").should("have.text", "bezorgadres")
        cy.get("#dwfrm_fulladdressform .input-radio").contains(mr).first().click().parent().should("have.css", "background-color", "#5dc5e3")
        //cy.get("#dwfrm_smalladdressform_information_gender_NL_2").click()
        cy.get("#dwfrm_smalladdressform_information_name_firstname_NL").type(firstname).should("have.value", firstname)
        cy.get("#dwfrm_smalladdressform_information_name_lastname_NL").type(lastname).should("have.value", lastname)
        cy.get("#dwfrm_smalladdressform_information_email_email_NL").type(email).should("have.value", email)
        cy.get("#dwfrm_smalladdressform_information_phone_NL").type(phoneNum).should("have.value", phoneNum)
        cy.get("[name='dwfrm_singleshipping_shippingAddress_save']").click()
    });
});