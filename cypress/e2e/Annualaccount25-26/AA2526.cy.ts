import "cypress-file-upload";
import { eq } from "cypress/types/lodash";
describe("Annual Account form", () => {
   
    it("Verify URL and title of the web page", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    // cy.get(".ds-i-c span:first-child").should("contain.text", "city");
    // cy.get(".ds-i-c span:last-child").should("contain.text", "finance.in");
  });



  it("Verify XVFC page Navigation", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
   cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').should("be.visible").contains("Login");
    cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
    // cy.get(".dropdown-menu.dropdown-menu-login").should("be.visible");;

    cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').each(
      ($el, index, $list) => {
        const option = $el.find("a").text();
        if (option.includes("XV FC Grant")) {
          cy.wrap($el).click();
          cy.wait(1000);
        }
      }
    );
  });

  it("Navigate to login Page", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
    cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
  });

  it("ULB login page UI", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
   cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get(".formTitle b").should("be.visible").and("have.text", "Sign In");
    cy.get('input[formcontrolname="email"]').should("be.visible");
    cy.get('input[formcontrolname="password"]').should("be.visible");
    cy.get(".img-responsive").should("be.visible");
    cy.get("mat-icon[role='img']").should("be.visible");
    cy.get("a[href='mailto:15fcgrant@cityfinance.in']").should(
      "have.text",
      "15fcgrant@cityfinance.in"
    );
  });

  it("successful ulb login", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
    cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env('AnnualAccount_id'));
    cy.get('input[formcontrolname="password"]').type(Cypress.env('Annual_Account_password'));
    cy.get("button[type='submit']").click();
  });

  it("Invalid Email valid password", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type("808800");
    cy.get('input[formcontrolname="password"]').type(Cypress.env("Annual_Account_password"));
    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "User not found");
  });

  it("Invalid Password valid email", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("AnnualAccount_id"));
    cy.get('input[formcontrolname="password"]').type("ulb@124");
    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "Invalid credentials.");
  });

  it("Both Invalid Username and Password", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type("800964");
    cy.get('input[formcontrolname="password"]').type("ulb@124");
    cy.get("button[type='submit']").click();
  });

  it("eye icon", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click()
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="password"]').should(
      "have.attr",
      "type",
      "password"
    );
    cy.get("mat-icon[role='img']").click();
    cy.get('input[formcontrolname="password"]').should(
      "have.attr",
      "type",
      "text"
    );
  });




  it("Navigate to Annual account  form", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("AnnualAccount_id"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("Annual_Account_password"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2025-26").click();
    cy.wait(3000);

    cy.wait(1000);
    cy.get("a").contains("span", "Annual Accounts").click();
    cy.get(".form-h")
    cy.contains('button', 'Provisional Accounts for 2024-25').click();
  })



  it("Verify Provisional Accounts first upload question", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("AnnualAccount_id"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("Annual_Account_password"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2025-26").click();
    cy.wait(3000);

    cy.wait(1000);
    cy.get("a").contains("span", "Annual Accounts").click();
    cy.get(".form-h")
    cy.contains('button', 'Provisional Accounts for 2024-25').click();

    cy.get('body').then(($body) => {
    if ($body.find('.mat-radio-label-content:contains("Yes")').length > 0) {
    cy.contains('.mat-radio-label-content', 'Yes')
      .click({ force: true });
    } else {
    cy.log('Radio button "Yes" not present, skipping...');
   }
});

    cy.contains('div', 'Balance Sheet').should('be.visible');
    cy.get('button.btn-upload').eq(0).should('be.visible');
    cy.get('input[type="file"]').eq(0).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
      force: true,
    });
    cy.get('span.file-icon-cross.pointer-hand').eq(0).should('be.visible');
    cy.get('span.file-icon-cross.pointer-hand').eq(0).click();
    cy.get('button.btn-upload').eq(0).should('be.visible');
    cy.get('input[type="file"]').eq(0).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
      force: true,
 });



    cy.get('button.btn-upload').eq(1).should('be.visible');
    cy.get('input[type="file"]').eq(1).selectFile('cypress/fixtures/AAexelupload.xlsx', {
      force: true,
    });
    cy.get('span.file-icon-cross.pointer-hand').eq(1).should('be.visible');
    cy.get('span.file-icon-cross.pointer-hand').eq(1).click();
    cy.get('input[type="file"]').eq(1).selectFile('cypress/fixtures/AAexelupload.xlsx', {
      force: true,
    });

    cy.contains('button.btn-save', 'Save as Draft').should('be.visible').click();
    cy.get('button.swal-button--confirm').should('be.visible').click();
  })


 it("Verify Provisional Accounts input fields validation check", () => {
  cy.visit("https://www.cityfinance.in/fc_grant");
   cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
  cy.get('input[type="submit"]').contains('LOGIN').click();
  cy.get("#ulb i").click();
  cy.get('input[formcontrolname="email"]').type(Cypress.env("AnnualAccount_id"));
  cy.get('input[formcontrolname="password"]').type(Cypress.env("Annual_Account_password"));
  cy.get("button[type='submit']").click();
  cy.contains("a", "15th FC Grants").click();
  cy.wait(3000);
  cy.contains("button", "2025-26").click();
  cy.wait(3000);

  cy.wait(1000);
  cy.get("a").contains("span", "Annual Accounts").click();
  cy.get(".form-h")
  cy.contains('button', 'Provisional Accounts for 2024-25').click();

  cy.get('body').then(($body) => {
    if ($body.find('.mat-radio-label-content:contains("Yes")').length > 0) {
    cy.contains('.mat-radio-label-content', 'Yes')
      .click({ force: true });
    } else {
    cy.log('Radio button "Yes" not present, skipping...');
   }
});


  cy.get('input.form-control[digitonly]').eq(0)
  .should('be.visible')
  .and('have.attr', 'type', 'number')
  .and('have.attr', 'placeholder', 'Upto 15 digits.');
  
cy.get('input.form-control[digitonly]').eq(0)
  .type('12345678901234560').clear();
  cy.wait(2000)


  cy.get('input.form-control[digitonly]').eq(0).type('abc')
  .should('have.value', ''); // Should remain empty if alphabets are restricted

// Try entering special characters
cy.get('input.form-control[digitonly]').eq(0)
  .type('!@#$%^&*()')
  .should('have.value', ''); // Should remain empty if special characters are restricted

cy.get('input.form-control[digitonly]').eq(0)
  .type('12345678901234560')
  .should('have.value', '12345678901234560');
   cy.get('div.error-msg.text-primary').should('be.visible')
   cy.get('input.form-control[digitonly]').eq(0)
   .clear().type('123456789012345')
   .should('have.value', '123456789012345');



  cy.get('input.form-control[digitonly]').eq(1)
  .should('be.visible')
  .and('have.attr', 'type', 'number')
  .and('have.attr', 'placeholder', 'Upto 15 digits.');
  
cy.get('input.form-control[digitonly]').eq(1)
  .type('12345678901234560').clear();
  cy.wait(2000)


  cy.get('input.form-control[digitonly]').eq(1).type('abc')
  .should('have.value', ''); // Should remain empty if alphabets are restricted

// Try entering special characters
cy.get('input.form-control[digitonly]').eq(1)
  .type('!@#$%^&*()')
  .should('have.value', ''); // Should remain empty if special characters are restricted

cy.get('input.form-control[digitonly]').eq(1)
  .type('12345678901234560')
  .should('have.value', '12345678901234560');
   cy.get('div.error-msg.text-primary').should('be.visible')
   cy.get('input.form-control[digitonly]').eq(1)
   .clear().type('123456789012345')
   .should('have.value', '123456789012345');


   cy.get('input.form-control[digitonly]').eq(2)
  .should('be.visible')
  .and('have.attr', 'type', 'number')
  .and('have.attr', 'placeholder', 'Upto 15 digits.');
  
cy.get('input.form-control[digitonly]').eq(2)
  .type('1234567890123450').clear();
  cy.wait(2000)


  cy.get('input.form-control[digitonly]').eq(2).type('abc')
  .should('have.value', ''); // Should remain empty if alphabets are restricted

// Try entering special characters
cy.get('input.form-control[digitonly]').eq(2)
  .type('!@#$%^&*()')
  .should('have.value', ''); // Should remain empty if special characters are restricted

cy.get('input.form-control[digitonly]').eq(2)
  .type('12345678901234560')
  .should('have.value', '12345678901234560');
   cy.get('div.error-msg.text-primary').should('be.visible')
   cy.get('input.form-control[digitonly]').eq(2)
   .clear().type('123456789012345')
   .should('have.value', '123456789012345');



   cy.get('input.form-control[digitonly]').eq(3)
  .should('be.visible')
  .and('have.attr', 'type', 'number')
  .and('have.attr', 'placeholder', 'Upto 15 digits.');
  
cy.get('input.form-control[digitonly]').eq(3)
  .type('1234567890123450').clear();
  cy.wait(2000)


  cy.get('input.form-control[digitonly]').eq(3).type('abc')
  .should('have.value', ''); // Should remain empty if alphabets are restricted

// Try entering special characters
cy.get('input.form-control[digitonly]').eq(3)
  .type('!@#$%^&*()')
  .should('have.value', ''); // Should remain empty if special characters are restricted

cy.get('input.form-control[digitonly]').eq(3)
  .type('12345678901234560')
  .should('have.value', '12345678901234560');
   cy.get('div.error-msg.text-primary').should('be.visible');
   cy.get('input.form-control[digitonly]').eq(3)
   .clear().type('123456789012345')
   .should('have.value', '123456789012345');


   cy.get('input.form-control[digitonly]').eq(4)
  .should('be.visible')
  .and('have.attr', 'type', 'number')
  .and('have.attr', 'placeholder', 'Upto 15 digits');
  
cy.get('input.form-control[digitonly]').eq(4)
  .type('1234567890123450').clear();
  cy.wait(2000)


  cy.get('input.form-control[digitonly]').eq(4).type('abc')
  .should('have.value', ''); // Should remain empty if alphabets are restricted

// Try entering special characters
cy.get('input.form-control[digitonly]').eq(4)
  .type('!@#$%^&*()')
  .should('have.value', ''); // Should remain empty if special characters are restricted

cy.get('input.form-control[digitonly]').eq(4)
  .type('12345678901234560')
  .should('have.value', '12345678901234560');
   cy.get('div.error-msg.text-primary').should('be.visible');
   cy.get('input.form-control[digitonly]').eq(4)
   .clear().type('123456789012345')
   .should('have.value', '123456789012345');




   cy.get('input.form-control[digitonly]').eq(5)
  .should('be.visible')
  .and('have.attr', 'type', 'number')
  .and('have.attr', 'placeholder', 'Upto 15 digits');
  
cy.get('input.form-control[digitonly]').eq(5)
  .type('123456789012345').clear();
  cy.wait(2000)


  cy.get('input.form-control[digitonly]').eq(5).type('abc')
  .should('have.value', ''); // Should remain empty if alphabets are restricted

// Try entering special characters
cy.get('input.form-control[digitonly]').eq(5)
  .type('!@#$%^&*()')
  .should('have.value', ''); // Should remain empty if special characters are restricted


cy.get('input.form-control[digitonly]').eq(5)
  .type('12345678901234560')
  .should('have.value', '12345678901234560');
   cy.get('div.error-msg.text-primary').should('be.visible');
   
   cy.get('input.form-control[digitonly]').eq(5).focus().clear().type('123456789012345').should('have.value', '123456789012345');

   


// cy.get('input.form-control[digitonly]').eq(5)
//   .type('1234567890123456')
//   .should('have.value', '1234567890123456');
  //  cy.get('div.error-msg.text-primary').should('be.visible').clear().type('123456789012345').should('have.value', '123456789012345');
 
    
    
        cy.contains('div', ' Balance Sheet Schedule ').should('be.visible');
        cy.get('button.btn-upload').eq(2).should('be.visible');
        cy.get('input[type="file"]').eq(2).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
          force: true,
        });
        // cy.get('span.file-icon-cross.pointer-hand').eq(2).should('be.visible');
        // cy.get('span.file-icon-cross.pointer-hand').eq(2).click();
        // cy.get('button.btn-upload').eq(2).should('be.visible');
        cy.get('input[type="file"]').eq(2).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
          force: true,
        });
    
    
    
        cy.get('button.btn-upload').eq(3).should('be.visible');
        cy.get('input[type="file"]').eq(3).selectFile('cypress/fixtures/AAexelupload.xlsx', {
          force: true,
        });
        // cy.get('span.file-icon-cross.pointer-hand').eq(3).should('be.visible');
        // cy.get('span.file-icon-cross.pointer-hand').eq(3).click();
        cy.get('input[type="file"]').eq(3).selectFile('cypress/fixtures/AAexelupload.xlsx', {
          force: true,
        });

        cy.contains('div', ' Income Expenditure ').should('be.visible');
        cy.get('button.btn-upload').eq(4).should('be.visible');
        cy.get('input[type="file"]').eq(4).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
          force: true,
        });
        // cy.get('span.file-icon-cross.pointer-hand').eq(2).should('be.visible');
        // cy.get('span.file-icon-cross.pointer-hand').eq(2).click();
        // cy.get('button.btn-upload').eq(2).should('be.visible');
        cy.get('input[type="file"]').eq(4).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
          force: true,
        });
    
    
    
        cy.get('button.btn-upload').eq(5).should('be.visible');
        cy.get('input[type="file"]').eq(5).selectFile('cypress/fixtures/AAexelupload.xlsx', {
          force: true,
        });
        // cy.get('span.file-icon-cross.pointer-hand').eq(3).should('be.visible');
        // cy.get('span.file-icon-cross.pointer-hand').eq(3).click();
        cy.get('input[type="file"]').eq(5).selectFile('cypress/fixtures/AAexelupload.xlsx', {
          force: true,
        });


        cy.contains('div', ' Income Expenditure Schedule ').should('be.visible');
        cy.get('button.btn-upload').eq(6).should('be.visible');
        cy.get('input[type="file"]').eq(6).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
          force: true,
        });
        // cy.get('span.file-icon-cross.pointer-hand').eq(2).should('be.visible');
        // cy.get('span.file-icon-cross.pointer-hand').eq(2).click();
        // cy.get('button.btn-upload').eq(2).should('be.visible');
        cy.get('input[type="file"]').eq(6).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
          force: true,
        });
    
    
    
        cy.get('button.btn-upload').eq(7).should('be.visible');
        cy.get('input[type="file"]').eq(7).selectFile('cypress/fixtures/AAexelupload.xlsx', {
          force: true,
        });
        // cy.get('span.file-icon-cross.pointer-hand').eq(3).should('be.visible');
        // cy.get('span.file-icon-cross.pointer-hand').eq(3).click();
        cy.get('input[type="file"]').eq(7).selectFile('cypress/fixtures/AAexelupload.xlsx', {
          force: true,
        });

        cy.contains('div', ' Cash flow Statement ').should('be.visible');
        cy.get('button.btn-upload').eq(8).should('be.visible');
        cy.get('input[type="file"]').eq(8).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
          force: true,
        });
        // cy.get('span.file-icon-cross.pointer-hand').eq(2).should('be.visible');
        // cy.get('span.file-icon-cross.pointer-hand').eq(2).click();
        // cy.get('button.btn-upload').eq(2).should('be.visible');
        cy.get('input[type="file"]').eq(8).selectFile('cypress/fixtures/AAlessthan50mb.pdf', {
          force: true,
        });
    
    
    
        cy.get('button.btn-upload').eq(9).should('be.visible');
        cy.get('input[type="file"]').eq(9).selectFile('cypress/fixtures/AAexelupload.xlsx', {
          force: true,
        });
        // cy.get('span.file-icon-cross.pointer-hand').eq(3).should('be.visible');
        // cy.get('span.file-icon-cross.pointer-hand').eq(3).click();
        cy.get('input[type="file"]').eq(9).selectFile('cypress/fixtures/AAexelupload.xlsx', {
          force: true,
        });

        cy.get('span.mat-radio-label-content').eq(3).click();
        cy.contains('button.btn-save', 'Submit').should('be.visible').click()
     })

    

 })



