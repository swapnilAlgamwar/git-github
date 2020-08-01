///<reference types="cypress"/>
describe('My Locators Suite',function() {
    it('My Locator Test1',function() {
    cy.visit("https://demo.nopCommerce.com/")
    cy.get("#small-searchterms").type("Apple iCam")
    })
})

