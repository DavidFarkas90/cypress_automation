describe('P30 Test', () => {
    it('Test for AB test P30', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
});