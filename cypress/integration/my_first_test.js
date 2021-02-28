/// <reference types="cypress" />

//const { expect } = require('chai')
const locators = require('../fixtures/example.json')

describe('JQuery and Cypress Test Case', function () {
    it('Performing JQuery Operation', function () {
      cy.visit("https://toolsqa.com/");


      cy.request("/")
        .its('body')
        .then(html => {
          const $titleHomePage = Cypress.$(html).find('#site-description').text();
          const fasz = Cypress.$(html).find("#cookie_action_close_header")
          
        //   if (fasz.is(':visible')){
        //     //you get here only if button is visible
        //     cy.wrap(fasz).click()
        //   }
        
          cy.log('Title of Page is: ' + $titleHomePage);
          cy.log('Tfaszs: ' + fasz.text());
          cy.wrap(fasz).click()
        })
      })
  })




// describe('First test', () => {
//     it('Visit polovni automobili', () => {
//         cy.visit('https://www.polovniautomobili.com/')
//         cy.xpath(locators.Elements.sveMarke).click()
//         cy.xpath(locators.Elements.sveMarkeTextInput).type(locators.Data.car)
//         cy.xpath(locators.Elements.selectMarku).contains(locators.Data.car).click({ force: true })
//         cy.xpath(locators.Elements.sviModeliInput).click()
//         cy.xpath("//*[@id='model']/following-sibling::div/ul/li/label").each(($el, index, $list) => {
        
//             //cy.log('Model ' + $el.text())
//             if($el.text().includes('CX-5')) {
//                 expect($el.text()).to.contain('CX-5')
//                 //cy.wrap($el)
//             }
       
//         })
//         //cy.xpath(locators.Buttons.searchButton).click()
//         //cy.assertTitle(locators.Data.car)

//     })
// })