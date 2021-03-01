describe('Checkout flow', () => {
    before(() => {
        cy.visit("https://www.hema.nl/")
        cy.get("body").then(($body) => {
            if($body.find("#EBG_258_accept").length > 0) {
                cy.get("#EBG_258_accept").click({force: true})
            }
            else(cy.get(".hidden-on-mobile .js-close-cookies").click())
        })
        
    })
    it('Add product to cart', () => {
        cy.selectCategory("heren", "shirts en polo's")
        cy.get('h1.filters-heading').should("have.text", "t-shirts en polo's")
        cy.selectProduct(2)
        cy.get("ul.vdasize li").contains("L").click()
        cy.wait(5000)
        // cy.get(".dd-wrap .selectric").click({force: true})
        // cy.get(".dd-wrap .selectric-scroll li").contains("2").click()
        cy.get("#add-to-cart").click()
        cy.get(".minicart-totals a").click()
        cy.get(".page-title").should("have.text", "winkelmandje")
        cy.get("#checkout-form .proceed-checkout").click()
        cy.get("#dwfrm_guestlogin").click()
    });
});