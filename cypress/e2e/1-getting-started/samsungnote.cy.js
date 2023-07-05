///<reference types="Cypress"/>
import 'cypress-axe';
  describe('My First Test Suite', function() {
    it('My first Test Case', function() {
      
      cy.visit("https://www.lambdatest.com/selenium-playground/", {
        timeout: 10000, 
        onBeforeLoad: (win) => {
          win.addEventListener('load', () => {
            cy.log('Page loaded');
          });
        },
        headers: {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Mobile Safari/537.36',
        },
      });
  
      cy.contains('Input Form Submit').click();

     
      cy.injectAxe();
      cy.checkA11y();
      cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('input[name="address"]').type('123 Main Street');
    cy.get('input[name="city"]').type('New York');
    cy.get('input[name="zip"]').type('12345');
    cy.get('input[name="website"]').type('https://www.example.com');
    cy.get('input[name="hosting"][value="yes"]').check();
    cy.get('textarea[name="comment"]').type('This is a test comment.');

   
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "submission-success-page");

    it('should pass the performance audit', () => {
        cy.lighthouse({
          performanceBudget: {
           
            loadPage: 3000,
          },
        });
      });
    
      it('should pass the accessibility audit', () => {
        cy.pa11y();
        cy.contains("Thanks for contacting us, we will get back to you shortly.")
        .should("be.visible");
        cy.visit('about:blank');
  
    });
  });
})