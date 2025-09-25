import 'cypress-file-upload'
require('cypress-xpath');

describe("test1",() => {
it('Detailed Utilization Report heading visiblity',()=>{
    cy.visit("https://staging.cityfinance.in/login");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
             cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env('code'));
    cy.get('input[formcontrolname="password"]').type(Cypress.env('dur_password'));
    cy.get("button[type='submit']").click();
    cy.contains('a', '15th FC Grants').click();
    cy.contains('button', '2024-25').click();
  //   cy.contains('span', 'Detailed Utilisation Report').should('be.visible').click();
  //   cy.get('.form-h').should('be.visible').and('contain', 'Detailed Utilization Report');
  //   cy.get('.form-select').should('be.visible');
  //   cy.get('.form-select option').should('be.visible').and('contain', '2023-24');
  //   cy.contains('button', 'Preview')
  // .should('be.visible')    
  // .should('not.be.disabled')
  // .click(); 
  // cy.get('.fa.fa-times').click();             

})
// it('General section',()=>{
//     cy.visit("https://staging.cityfinance.in/login");
//      cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
//          cy.get('i.bi-box-arrow-in-right').eq(0).click();
//              cy.get('input[type="submit"]').contains('LOGIN').click();
//     cy.get("#ulb i").click();
//     cy.get('input[formcontrolname="email"]').type(Cypress.env('code'));
//     cy.get('input[formcontrolname="password"]').type(Cypress.env('dur_password'));
//     cy.get("button[type='submit']").click();
//     cy.contains('a', '15th FC Grants').click();

//     cy.contains('button', '2024-25').click();
//     cy.contains('span', 'Detailed Utilisation Report').should('be.visible').click();
//     // cy.contains('span', 'General').should('be.visible');
//     cy.get("label[for='1.001']").should('be.visible').and('contain', 'Name of MPC/UA/NMPC*');
//     cy.get("label[for='1.002']").should('be.visible').and('contain', 'Type of Grant*');
//     cy.get("input[name='1.001']").should('be.visible');
//     cy.get("input[name='1.002']").should('be.visible');
//     cy.xpath("//span[contains(text(),'General')]").should('be.visible');   

// })
// function numberToWords(num) {
//     const a = [
//       "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
//       "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
//     ];
//     const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//     const lakh = " lakhs";
  
//     let [integerPart, decimalPart] = num.toString().split(".");
  
//     const convertBelowHundred = (n) => n < 20 ? a[n] : b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
  
//     const convertBelowThousand = (n) => {
//       const hundreds = Math.floor(n / 100);
//       const remainder = n % 100;
//       return (hundreds ? a[hundreds] + " Hundred " : "") + convertBelowHundred(remainder);
//     };
  
//     // const convertLakhs = (n) => n ? convertBelowThousand(n) + lakh : "";
  
//     const numberInWords = `${convertBelowThousand(Math.floor(integerPart))} ${decimalPart ? "Point " + convertBelowHundred(parseInt(decimalPart)) + lakh : ""}`;
    
//     return numberInWords.trim();
//   }
  
  
// it('Grant status section',()=>{
//     cy.visit("https://staging.cityfinance.in/login");
//     cy.get("#ulb i").click();
//     cy.get('input[formcontrolname="email"]').type(Cypress.env('code'));
//     cy.get('input[formcontrolname="password"]').type(Cypress.env('dur_password'));
//     cy.get("button[type='submit']").click();
//     cy.contains('a', '15th FC Grants').click();

//     cy.contains('button', '2024-25').click();
//     cy.contains('span', 'Detailed Utilisation Report').should('be.visible').click();

  //   cy.get(" label[for='2.005']").should('be.visible').and('contain', 'i. Unutilised Tied Grants from previous installment (in lakhs)* ');
  //   cy.get("label[for='2.002']").should('be.visible').and('contain', 'ii. 15th F.C. Tied grant received for the year (1st & 2nd installment taken together) (in lakhs)* ');
  //   cy.get("label[for='2.003']").should('be.visible').and('contain', 'iii. Expenditure incurred during the year i.e. as on 31st march 2024 from Tied grant (in lakhs)* ');
  //   var valueInWords="";
  //   cy.xpath("//span[contains(text(),'15th FC Tied Grant Status for the Financial Year 2')]").should('be.visible');   
  //   cy.get("input[id='2.005']").invoke('val').then((value) => {
  //        valueInWords = numberToWords(parseFloat(value));
       
  //     });
  //     cy.get("input[id='2.005']") 
  // .parent() 
  // .siblings('small') 
  // .invoke('text') 
  // .then((text) => {
    
        
  //       expect(valueInWords).to.equal(text);
    
  });


