import "cypress-file-upload";
import { MailSlurp } from "mailslurp-client";
import { eq } from "cypress/types/lodash";
import * as XLSX from 'xlsx';
describe("Bulk Upload", () => {
   
it("Verify URL and title of the web page", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
  });


it("Navigating to the resource section", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
    cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains('Karnataka').click();
    cy.wait(2000);
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);
        cy.get('mat-select[formcontrolname="state"]').click();
    cy.wait(2000);

    cy.get('mat-option').contains(' Maharashtra ').click();


    cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains('Karnataka').click();
    cy.wait(2000);

})

    it("Checking state dropdown and ulb input box", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
    cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains('Karnataka').click();
    cy.wait(2000);
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);
        cy.get('mat-select[formcontrolname="state"]').click();
    cy.wait(2000);

    cy.get('mat-option').contains(' Maharashtra ').click();


    cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains('Karnataka').click();
    cy.wait(2000);
    cy.get('input[formcontrolname="ulb"]').type('challakere');
    cy.get('.mat-option').should('be.visible');
    cy.get('.mat-option').first().click();


  });


   it("Create state bundle flow", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);
    cy.contains('button', 'Create state bundle').should('be.visible').click();     
      cy.get('mat-radio-button').first().click().should('exist')
      .within(() => {
        cy.get('input[type="radio"]').should('be.checked');
      });
    cy.contains('button', 'Email me the files', { timeout: 10000 }).should('be.visible').click();
  
      



})


 it("Verify download PopUp", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);
    cy.contains('button', 'Create state bundle').should('be.visible').click();     
      cy.get('mat-radio-button').first().click().should('exist')
      .within(() => {
        cy.get('input[type="radio"]').should('be.checked');
      });
    cy.contains('button', 'Email me the files', { timeout: 10000 }).should('be.visible').click();
    cy.get('#userName').should('be.visible').type('Abhishek');

    cy.get('#email').type('abhishekkrishna2422@gmail.com');
    cy.get('#organization').should('be.visible').type('Janaagraha');
    cy.get('#designation').should('be.visible').type('Teaster');
    

})

it("Verify ClearAll fuctionalities", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);
    cy.contains('button', 'Create state bundle').should('be.visible').click();     
      cy.get('mat-radio-button').first().click().should('exist')
      .within(() => {
        cy.get('input[type="radio"]').should('be.checked');
      });

       cy.get('input[formcontrolname="ulb"]').type('challakere');

       const yearToSelect = '2024-25';

    cy.get('mat-select[formcontrolname="year"]').click();
    cy.get('mat-option').contains(yearToSelect).click();
    cy.get('mat-select[formcontrolname="year"] span.mat-select-min-line')
    .should('have.text', yearToSelect);
    cy.wait(4000);
    cy.contains('span', 'Clear All').click();


    })


    it("Verify Type of document uploaded", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);
     cy.get('input[type="radio"]').should('be.checked');
     cy.get('img[alt="PDF Icon"]').should('be.visible');

    cy.wait(2000);
     cy.get('mat-radio-button').eq(1).click();
     cy.get('img[alt="Excel Icon"]').should('be.visible');
     cy.get('mat-radio-button').eq(2).click();
     cy.wait(3000);
     cy.get('mat-radio-button').eq(3).click();
     cy.get('img[alt="PDF Icon"]').should('be.visible');


    })

    it("Verify the download by clicking the document directly", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);  
      cy.get('mat-radio-button').first().click().should('exist')
      .within(() => {
        cy.get('input[type="radio"]').should('be.checked');
      });
      cy.get('.row.align-items-center').filter(':has(img[alt="PDF Icon"])').first()
  .find('img[alt="PDF Icon"]')
  .click();
  cy.wait(3000);
  cy.contains('a.list-group-item', 'Balance Sheet').should('be.visible').click();
  cy.wait(3000);

    cy.get('#userName').should('be.visible').type('Abhishek');

    cy.get('#email').type('abhishekkrishna2422@gmail.com');
    cy.get('#organization').should('be.visible').type('Janaagraha');
    cy.get('#designation').should('be.visible').type('Teaster');
    cy.get('#checkbox').should('be.visible').click();

})





it("Verify Using invalid OTP", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);
    cy.contains('button', 'Create state bundle').should('be.visible').click();     
      cy.get('mat-radio-button').first().click().should('exist')
      .within(() => {
        cy.get('input[type="radio"]').should('be.checked');
      });
    cy.contains('button', 'Email me the files', { timeout: 10000 }).should('be.visible').click();
    cy.get('#userName').should('be.visible').type('Abhishek');

    cy.get('#email').type('abhishekkrishna2422@gmail.com');
    cy.get('#organization').should('be.visible').type('Janaagraha');
    cy.get('#designation').should('be.visible').type('Teaster');
    cy.get('#checkbox').should('be.visible').click();
    cy.contains('button', 'Submit').should('be.visible').click();
    cy.get('#otp').type('234567');
    cy.contains('button', 'Verify').click();
    cy.get('#swal2-title').should('have.text', 'Error');
    cy.get('button[mat-dialog-close].btn-outline-secondary').eq(1).contains('Cancel')


})


it("Verify Using valid OTP", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    cy.contains('a', 'Resources').click();
    cy.contains('div', 'Resources').should('be.visible');
   cy.get('mat-select[formcontrolname="state"]').click();
    cy.get('mat-option').contains(' Andhra Pradesh ').click();
    cy.wait(2000);
    cy.contains('button', 'Create state bundle').should('be.visible').click();     
      cy.get('mat-radio-button').first().click().should('exist')
      .within(() => {
        cy.get('input[type="radio"]').should('be.checked');
      });
    cy.contains('button', 'Email me the files', { timeout: 10000 }).should('be.visible').click();
    cy.get('#userName').should('be.visible').type('Abhishek');

    cy.get('#email').type('abhishekkrishna2422@gmail.com');
    cy.get('#organization').should('be.visible').type('Janaagraha');
    cy.get('#designation').should('be.visible').type('Teaster');
    cy.get('#checkbox').should('be.visible').click();
    cy.contains('button', 'Submit').should('be.visible').click();
    cy.get('#otp').type('123456');
    cy.get('button[mat-dialog-close].btn-outline-secondary').eq(1).contains('Cancel')
    cy.get('button[mat-dialog-close].btn-outline-secondary').eq(0).contains('Cancel')


})

})



