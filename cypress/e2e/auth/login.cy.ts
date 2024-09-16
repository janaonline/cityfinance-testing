describe("Login page", () => {
    const id = Cypress.env("id");
    const password = Cypress.env("password");

    beforeEach(function () {
        cy.visit("/login");
    });

    it("Load the login page", () => {
        cy.get("span").should("contain", "Users");
    });

    it("Check validations", () => {
        cy.get("#ulb").click();
        cy.get(".formTitle").should("contain", "Sign In");
        cy.get(".login-btn").eq(0).click();
        cy.get("input[type='email']").should("have.class", "ng-invalid");
    });

    it.skip("Successful login", () => {
        cy.get("#ulb").click();
        cy.get("input[type=email]").type(id);
        cy.get("input[type=password]").type(password);
        cy.get(".login-btn").eq(0).click();
        cy.wait(2000)
        cy.get("h3").should("contain", "Select Financial Year");
    });
});
