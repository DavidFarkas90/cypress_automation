describe('P50 test', () => {
    it('Test for D p50', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
});