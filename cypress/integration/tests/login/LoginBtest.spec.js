describe('P30 test', () => {
    it('Test for AB test P30', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
    it('Test for BA test P30', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
    it('Test for CA test P30', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
    it('Test for DB test P40', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
    it('Test for EF test P40', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
});