///<reference types="Cypress"/>

describe('My First Test Suite', function()
{
    it('My firstTest Case', function(){
       
        cy.visit("https://www.lambdatest.com/selenium-playground/");
        cy.contains('Drag & Drop Sliders').click();
        cy.get('input[type="range"]').invoke('val', 15).trigger('input');
        cy.get('input[type="range"]').trigger('mousedown', { which: 1 });
        cy.get('.ui-slider-range').trigger('mousemove', {offsetLeft : 247 });
        cy.get('.ui-slider-range').trigger('mouseup');
        cy.get('input[type="range"]').should('have.value', 95);
        
})
})
