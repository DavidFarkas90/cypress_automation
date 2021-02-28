describe('P30 test', () => {
    it('Test for p30Btest', () => {
        cy.visit("https://www.hema.nl/")
        cy.url().should("include", "hema")
    });
});