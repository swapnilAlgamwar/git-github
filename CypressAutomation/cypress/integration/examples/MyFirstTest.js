/// <reference types="cypress"/>

describe('MyTestSuite', () => {
    it('Verify the title of the web Page', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
    })
    it('Verify the title of the web Page ---Negative Test', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce1')
    })
})