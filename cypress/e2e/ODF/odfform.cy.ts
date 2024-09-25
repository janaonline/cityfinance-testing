import "cypress-file-upload";
require('cypress-xpath');
describe("test1", () => {

  const id1 = Cypress.env("odfid");
  const password1 = Cypress.env("odfpassword");
  it("should verify that the user is on the Homepage", () => {
    cy.visit("https://cityfinance.in/home");

    cy.url().should("eq", "https://cityfinance.in/home");

    cy.title().should("eq", "City finance");

    cy.get(".ds-i-c span:first-child").should("contain.text", "city");
    cy.get(".ds-i-c span:last-child").should("contain.text", "finance.in");
  });

  it("Verify navigation to the XV FC Grant page.", () => {
    cy.visit("https://cityfinance.in/home");

    cy.get("#loginDrp").should("be.visible").contains("Login");
    cy.get("#loginDrp").click();
    cy.get(".dropdown-menu.dropdown-menu-login").should("be.visible");

    cy.get(".dropdown-menu.dropdown-menu-login.show li ").each(
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
  it("sign in box UI", () => {
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

  it("Both empty submit", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get("button[type='submit']").click();
    cy.get("form mat-form-field")
      .eq(0) // Select the first mat-form-field within a form
      .find(".mat-form-field-outline.mat-form-field-outline-thick") // Find an element with the class 'my-class' inside the selected mat-form-field
      .should("have.css", "color", "rgb(244, 67, 54)");
    cy.get(
      ".forget-password div .mat-form-field-outline.mat-form-field-outline-thick"
    ).should("have.css", "color", "rgb(244, 67, 54)");
  });

  it("Invalid Email", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type("808800");

    cy.get('input[formcontrolname="password"]').type(Cypress.env("odfpassword"));

    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "User not found");
  });

  it("Invalid Password", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("odfid"));
    cy.get('input[formcontrolname="password"]').type("ulb@1234");
    cy.get("button[type='submit']").click();
    cy.get(".error-message span").should("be.visible").and("have.text", "Invalid credentials.");
  });

  it("Both Invalid", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type("123456");
    cy.get('input[formcontrolname="password"]').type("ulb@124");
    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "User not found");
  });
  it("successful Signin", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("odfid"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("odfpassword"));
    cy.get("button[type='submit']").click();
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

  it("Navigate to ODF form", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("odfid"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("odfpassword"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Open Defecation Free (ODF)").click();
  });
  it("ODF FORM UI", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("odfid"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("odfpassword"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Open Defecation Free (ODF)").click();
    cy.wait(1000);
    cy.get(".form-h")
      .should("be.visible")
      .and("contain.text", "Open Defecation Free (ODF)");
    cy.xpath('//label[text()="Open Defecation Free (ODF) Rating"]')
      .should("be.visible").and("contain.text","Open Defecation Free (ODF) Rating");
    // cy.xpath('//div[contains(text(), "Upload ODF Certificate?")]')
    //   .should("be.visible")
    //   .and("contain.text", "Upload ODF Certificate?");
    cy.get(".scoreDiv").should(
      "have.css",
      "background-color",
      "rgb(50, 205, 50)"
    );
    cy.get("mat-select[id='1']").should("be.visible");
   
  });
  it("error message displayed when PDF upload field is left blank", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("odfid"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("odfpassword"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Open Defecation Free (ODF)").click();
    cy.wait(1000);
    cy.get("mat-select[id='1']").click();
    cy.get("mat-option").contains("span", "No Rating").click();
    cy.xpath("//button[normalize-space()='Submit']").click();
    cy.get(".custom-file div")
      .should("have.text", " This is a required field ")
      .should("have.css", "color", "rgb(255, 0, 0)");
  });
  it("ODF Page Rating Search Functionality", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("odfid"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("odfpassword"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Open Defecation Free (ODF)").click();
    cy.wait(1000);
    cy.get("mat-select[id='1']").click();
    cy.get("input[id='1_dropDownSearch']").should(
      "have.attr",
      "placeholder",
      "Search Open Defecation Free (ODF) Rating"
    );
    cy.get("input[id='1_dropDownSearch']").type("ODF++");
    cy.get("mat-option").contains("span", "ODF++").should("be.visible");
    cy.get("input[id='1_dropDownSearch']").type("+");
    cy.get(".mat-option-text")
      .should("be.visible")
      .and("contain.text", "No options available ");
  });
  it("selecting different ratings correctly displays the associated scores.", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("odfid"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("odfpassword"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Open Defecation Free (ODF)").click();
    cy.wait(1000);
    cy.get("mat-select[id='1']").click();
    cy.get(".mat-option-text span").each(($el, index, $list) => {
      if ($el.text() === "ODF++") {
        cy.wrap($el).click();

        cy.get(".scoreDiv div").should("have.text", "Score = 10");
      } else if ($el.text() === "ODF+") {
        cy.get("mat-select[id='1']").click();
        cy.wrap($el).click();

        cy.get(".scoreDiv div").should("have.text", "Score = 8");
      } else {
        cy.get("mat-select[id='1']").click();
        cy.wrap($el).click();

        cy.get(".scoreDiv div").should("have.text", "Score = 0");
      }
    });
  });

  it("Form is successfully submit", () => {
    cy.visit("https://staging.cityfinance.in/login");
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("odfid"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("odfpassword"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2024-25").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Open Defecation Free (ODF)").click();
    cy.wait(1000);
    cy.get("mat-select[id='1']").click();
    cy.get("mat-option").contains("span", "ODF++").click();
    cy.xpath("//button[normalize-space()='Upload PDF']").click();
    cy.xpath("//button[normalize-space()='Upload PDF']").attachFile('ODF.pdf', { force: true });

    cy.get('input[type="date"]').then(($input: JQuery<HTMLInputElement>) => {
      // Set the value of the input field
      $input[0].value = '2023-09-10';  
  
      // Dispatch the 'input' event
      $input[0].dispatchEvent(new Event('input', { bubbles: true }));
  
      // Dispatch the 'change' event
      $input[0].dispatchEvent(new Event('change', { bubbles: true }));
  });


    cy.get('input[type="date"]').click();
    
   
      cy.xpath("//button[normalize-space()='Save as Draft']").click();
      cy.get(".swal-icon.swal-icon--success").should("be.visible");
      cy.get(".swal-title").should("be.visible").and("have.text", "Saved");
      cy.get(".swal-text")
        .should("be.visible")
        .and("have.text", "Data saved as draft successfully");
        cy.get(".swal-button.swal-button--confirm").click();
        cy.xpath("//button[@class='btn btn-save text-uppercase ng-star-inserted'][normalize-space()='Submit']").click();
        cy.get(".swal-icon.swal-icon--warning").should("be.visible");
        cy.get(".swal-title").should('have.text',"Confirmation !");
        cy.get(".swal-button.swal-button--Submit").click();
        cy.wait(1000);

    });

    
});
