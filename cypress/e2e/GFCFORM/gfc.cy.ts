import "cypress-file-upload";
require('cypress-xpath');
 require('dotenv');
describe("GFC form", () => {
   
    it("Verify URL and title of the web page", () => {
    cy.visit("https://cityfinance.in/home");

    cy.url().should("eq", "https://cityfinance.in/home");
    cy.title().should("eq", "City finance");

    cy.get(".ds-i-c span:first-child").should("contain.text", "city");
    cy.get(".ds-i-c span:last-child").should("contain.text", "finance.in");
  });

  it("Verify XVFC page Navigation", () => {
    cy.visit("https://cityfinance.in/home");

    cy.get("#loginDrp").should("be.visible").contains("Login");
    cy.get("#loginDrp").click();
    cy.get(".dropdown-menu.dropdown-menu-login").should("be.visible");

    cy.get(".dropdown-menu.dropdown-menu-login.show li").each(
      ($el, index, $list) => {
        const option = $el.find("a").text();
        if (option.includes("XV FC Grant")) {
          cy.wrap($el).click();
          cy.wait(1000);
          cy.url().should("eq", "https://cityfinance.in/fc_grant");
        }
      }
    );
  });

  it("Navigate to login Page", () => {
    cy.visit("https://staging.cityfinance.in/fc_grant");
    cy.get("input[value='LOGIN']").click();
    
    cy.get("#ulb i").click();
    cy.url().should("eq", "https://staging.cityfinance.in/login");
  });

  it("ULB login page UI", () => {
    cy.visit("https://staging.cityfinance.in/login");
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

  it("Both Username and password empty submission", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get("button[type='submit']").click();
    cy.get("form mat-form-field")
      .eq(0)
      .find(".mat-form-field-outline.mat-form-field-outline-thick")
      .should("have.css", "color", "rgb(244, 67, 54)"); // Select the first mat-form-field within a form // Find an element with the class 'my-class' inside the selected mat-form-field
    cy.get(
      ".forget-password div .mat-form-field-outline.mat-form-field-outline-thick"
    ).should("have.css", "color", "rgb(244, 67, 54)");
  });

  it("successful ulb login", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env('code'));
    cy.get('input[formcontrolname="password"]').type(Cypress.env('password2'));
    cy.get("button[type='submit']").click();
  });

  it("Invalid Email valid password", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type("808800");
    cy.get('input[formcontrolname="password"]').type(Cypress.env("password2"));
    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "User not found");
  });

  it("Invalid Password valid email", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("code"));
    cy.get('input[formcontrolname="password"]').type("ulb@124");
    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "Invalid credentials.");
  });

  it("Both Invalid Username and Password", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type("800964");
    cy.get('input[formcontrolname="password"]').type("ulb@124");
    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "Invalid credentials.");
  });

  it("eye icon", () => {
    cy.visit("https://staging.cityfinance.in/login");
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
  it("Navigate to GFC form", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("code"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("password2"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Garbage Free City (GFC)").click();
  });

  it("GFC FORM UI", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("code"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("password2"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Garbage Free City (GFC)").click();
    cy.wait(1000);
    cy.get(".form-h")
      .should("be.visible")
      .and("contain.text", "Garbage Free City (GFC)");
    cy.xpath('//label[text()="Garbage Free City (GFC) Rating"]')
      .should("be.visible")
      .and("contain.text", "Garbage Free City (GFC) Rating*");
    cy.get("mat-select[id='1']").click();
    cy.get("mat-option").contains("span", "No Rating").click();
    cy.xpath("//button[normalize-space()='Submit']").click();
    cy.xpath('//div[contains(text(), "Upload Declaration")]')
      .should("be.visible")
      .and("contain.text", "Upload Declaration");
    cy.get(".scoreDiv").should(
      "have.css",
      "background-color",
      "rgb(50, 205, 50)"
    );

    cy.get("mat-select[id='1']").should("be.visible");
    cy.xpath("//button[normalize-space()='Upload PDF']").should("be.visible");
    cy.xpath("//button[normalize-space()='Save as Draft']").should(
      "be.visible"
    );
    cy.xpath("//button[normalize-space()='Submit']").should("be.visible");
  });

  it("error message displayed when PDF upload field is left blank", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("code"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("password2"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Garbage Free City (GFC)").click();
    cy.wait(1000);
    cy.get("mat-select[id='1']").click();
    cy.get("mat-option").contains("span", "No Rating").click();
    cy.xpath("//button[normalize-space()='Submit']").click();
    // cy.get('.custom-file div').should('have.text', ' This is a required field ').should('have.css', 'color', 'rgb(255, 0, 0)');
  });

  it("GFC Page Rating Search Functionality", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("code"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("password2"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Garbage Free City (GFC)").click();
    cy.wait(1000);
    cy.get("mat-select[id='1']").click();
    cy.get("input[id='1_dropDownSearch']").should(
      "have.attr",
      "placeholder",
      "Search Garbage Free City (GFC) Rating"
    );
    cy.get("input[id='1_dropDownSearch']").type("GFC++");
    // cy.get('mat-option').contains('span', '').should('be.visible');
    cy.get("input[id='1_dropDownSearch']").type("+");
    // cy.get('.mat-option-text').should('be.visible').and('contain.text', 'No options available ');
  });

  it("selecting different ratings correctly displays the associated scores.", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("code"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("password2"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Garbage Free City (GFC)").click();
    cy.wait(1000);
    cy.get("mat-select[id='1']").click();
    cy.get(".mat-option-text span").each(($el, index, $list) => {
      if ($el.text() === "7 Star") {
        cy.wrap($el).click();

        cy.get(".scoreDiv div").should("have.text", "Score = 30");
      } else if ($el.text() === "5 Star") {
        cy.get("mat-select[id='1']").click();
        cy.wrap($el).click();

        cy.get(".scoreDiv div").should("have.text", "Score = 30");
      } else if ($el.text() === "3 Star") {
        cy.get("mat-select[id='1']").click();
        cy.wrap($el).click();

        cy.get(".scoreDiv div").should("have.text", "Score = 27");
      } else if ($el.text() === "1 Star") {
        cy.get("mat-select[id='1']").click();
        cy.wrap($el).click();

        cy.get(".scoreDiv div").should("have.text", "Score = 21");
      } else if ($el.text() === "No Rating" || "No Star") {
        cy.get("mat-select[id='1']").click();
        cy.wrap($el).click();

        cy.get(".scoreDiv div").should("have.text", "Score = 15");
      }
    });
  });

  it("Form is successfully submitted", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("code"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("password2"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Garbage Free City (GFC)").click();
    cy.wait(1000);
    cy.get("mat-select[id='1']").click();
    cy.get("mat-option").contains("span", "5 Star").click();
    cy.xpath("//button[normalize-space()='Upload PDF']").click();
    cy.get("input[accept$='application/pdf, 5120, 1']").attachFile("GFC.pdf", {
      force: true,
    });
    cy.get('input[type="date"]').then(($input: JQuery<HTMLInputElement>) => {
      // Set the value of the input field
      $input[0].value = '2023-09-10';  
  
      // Dispatch the 'input' event
      $input[0].dispatchEvent(new Event('input', { bubbles: true }));
  
      // Dispatch the 'change' event
      $input[0].dispatchEvent(new Event('change', { bubbles: true }));
  });
    cy.wait(10000);
    cy.xpath("//button[normalize-space()='Save as Draft']").click();
    cy.get(".swal-icon.swal-icon--success").should("be.visible");
    cy.get(".swal-title").should("be.visible").and("have.text", "Saved");
    cy.get(".swal-text")
      .should("be.visible")
      .and("have.text", "Data saved as draft successfully");
      cy.get(".swal-button.swal-button--confirm").click();
      cy.xpath("//button[normalize-space()='Submit']").click();
      cy.get(".swal-icon.swal-icon--warning").should("be.visible");
      cy.get(".swal-title").should('have.text',"Confirmation !");
      cy.get(".swal-button.swal-button--Submit").click();
      cy.wait(1000);

  })

      it('Check Review grant application UI',()=>{
        cy.visit("https://staging.cityfinance.in/login");
        cy.get("#state").click();
        cy.get('input[formcontrolname="email"]').type(Cypress.env('gfcstate_id'));
        cy.get('input[formcontrolname="password"]').type(Cypress.env('gfcstate_password'));
        cy.get("button[type='submit']").click();
        cy.contains('a', '15th FC Grants').click();
        cy.contains('button', '2024-25').click();
        cy.contains('a', 'Review Grant Application').click(); 
        cy.get('#form').select('Garbage Free City (GFC)');
        cy.get('.header2').should('contain.text',' Review Grant Application ');
        cy.contains('button', 'Approve all').should("be.visible");
        cy.contains('button', 'Return all').should("be.visible");
        cy.contains('button', 'Download').should("be.visible");
        cy.contains('button', 'Reset').should("be.visible");
        cy.contains('a','Take Action').should("be.visible");
        // cy.get('.mat-checkbox').should("be.visible");
        cy.get('thead tr:nth-child(1)').should('have.css', 'background-color', 'rgb(4, 116, 116)')
        .and('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('thead tr:nth-child(1)')
            .should('be.visible') 
            .within(() => {
             
             
              
              cy.get('th.ng-star-inserted').eq(0).should('contain.text', 'S No.');
              cy.get('th.ng-star-inserted').eq(1).should('contain.text', 'ULB Name');
              cy.get('th.ng-star-inserted').eq(2).should('contain.text', 'Census/SB Code');
              cy.get('th.ng-star-inserted').eq(3).should('contain.text', 'ULB Type');
              cy.get('th.ng-star-inserted').eq(4).should('contain.text', 'Population Type');
              cy.get('th.ng-star-inserted').eq(5).should('contain.text', 'UA');
              cy.get('th.ng-star-inserted').eq(6).should('contain.text', 'Form Status');
              cy.get('th.ng-star-inserted').eq(7).should('contain.text', 'Filled Status');
              cy.get('th.ng-star-inserted').eq(8).should('contain.text', 'Action');
            });
      })

      it('GFC Preview UI',()=>{
        cy.visit("https://staging.cityfinance.in/login");
        cy.get("#state").click();
        cy.get('input[formcontrolname="email"]').type(Cypress.env('gfcstate_id'));
        cy.get('input[formcontrolname="password"]').type(Cypress.env('gfcstate_password'));
        cy.get("button[type='submit']").click();
        cy.contains('a', '15th FC Grants').click();
        cy.contains('button', '2024-25').click();
        cy.contains('a', 'Review Grant Application').click(); 
        cy.get('#form').select('Garbage Free City (GFC)');
        cy.get("input[placeholder='Ulb Code']").type(Cypress.env('code'));
        cy.get("input[placeholder='Ulb Code']").next().click();
        cy.contains('a','Take Action').click();
        cy.contains('button','Preview').click();
        cy.xpath("//span[normalize-space()='Submissions for 15th FC grant for FY 2024-25']").
          should('be.visible').and('have.text',' Submissions for 15th FC grant for FY 2024-25 ');
          cy.get('#donwloadButton').should('be.visible');
          cy.get(".form-h.text-center").
          should('be.visible').and('have.text',' Garbage Free City (GFC) ');
          cy.get('.form-status').should("be.visible");
          cy.get('.d-ans').each(($el) => {
         
            cy.wrap($el).should('be.visible');
          });
          
      
      })

      it('Take Action Functionality',()=>{
        cy.visit("https://staging.cityfinance.in/login");
        cy.get("#state").click();
        cy.get('input[formcontrolname="email"]').type(Cypress.env('gfcstate_id'));
        cy.get('input[formcontrolname="password"]').type(Cypress.env('gfcstate_password'));
        cy.get("button[type='submit']").click();
        cy.contains('a', '15th FC Grants').click();
        cy.contains('button', '2024-25').click();
        cy.contains('a', 'Review Grant Application').click(); 
        cy.get('#form').select('Garbage Free City (GFC)');
        cy.get("input[placeholder='Ulb Code']").type(Cypress.env('code'));
        cy.get("input[placeholder='Ulb Code']").next().click();
        cy.contains('a','Take Action').click();
        cy.contains('label','Approve').should("be.visible");
        cy.contains('label','Return').should("be.visible");
        cy.get("#reason").type("The uploaded document is incorrect.");
        cy.get("input[accept$='.pdf']").next().click();
        cy.get("input[accept$='.pdf']")
        .attachFile('GFC.pdf', { force: true });
        cy.contains('label','Return').click();
        cy.contains('button','Submit').click();
        cy.get(".swal-button.swal-button--Submit").click();

      })
    


  
      
    })
     
      
    
        


  









