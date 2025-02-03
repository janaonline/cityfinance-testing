describe("Login page", () => {
    const id = Cypress.env("id");
    const password = Cypress.env("password");


    it("Check validations", () => {
        cy.visit("https://staging.cityfinance.in/fc_grant");
        cy.get('input[type="submit"]').contains('LOGIN').click();
        cy.get("#ulb").click();
        cy.get(".formTitle").should("contain", "Sign In");
        cy.get(".login-btn").eq(0).click();
        cy.get("input[type='email']").should("have.class", "ng-invalid");
    });

    it("Successful login", () => {
        cy.visit("https://staging.cityfinance.in/fc_grant");
        cy.get('input[type="submit"]').contains('LOGIN').click();
        cy.get("#ulb").click();
        cy.get("input[type=email]").type('800157');
        cy.get("input[type=password]").type('ulb@123');
        cy.get(".login-btn").eq(0).click();
        cy.wait(2000)
        cy.get("h3").should("contain", "Select Financial Year");
    });
});
