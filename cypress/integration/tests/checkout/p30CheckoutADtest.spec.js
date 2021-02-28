describe('P30 Test', () => {
    it('Test AD P30', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
});