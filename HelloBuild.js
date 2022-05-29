/// <reference types="Cypress" />
describe("ToolsQA register", function(){
    it("Register steps", function(){
    cy.visit('https://demoqa.com/login');
    cy.wait(2000);
    cy.get('#newUser').click();
    cy.get('#firstname').type('Miguel');
    cy.get('#lastname').type('Morales');
    cy.get('#username').type('MMorales123');
    cy.get('#password').type('TestCases1!');
    cy.get('#register').click();
    })
})