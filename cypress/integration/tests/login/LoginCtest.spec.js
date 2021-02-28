describe('P40 test', () => {
    it('Test for C P40', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
});