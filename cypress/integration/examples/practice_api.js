/// <reference types="cypress" />

describe('Practice API testing', function() {
    it('GET LOTR books', function() {

        cy.request('https://the-one-api.dev/v2/book').then((res) => {
            let books = res.body.docs
            let totalNumber = res.body.total
            expect(res.status).equal(200)
            expect(books).to.have.lengthOf(3)
            expect(totalNumber).to.eql(3)
        })
   })
   it('GET book by id', function() {
       cy.request('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582').then((res) => {
           let bookName = res.body.docs[0].name
           expect(bookName).to.eql('The Fellowship Of The Ring')
       })
   })
})