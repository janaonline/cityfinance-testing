describe("Home page", () => {

    beforeEach(function () {
      cy.visit("/Home");
    });


    it("validation of Ulb login page", () => {

        cy.xpath("//button[@id='loginDrp']").click();
        cy.wait(4000);
        cy.xpath("//div[@class='ms-auto']//li[2]//a[1]").click();
        cy.get(".formTitle").should("contain", "Sign In");
        cy.xpath("//input[@type='email']").should("have.class", "ng-invalid");
        cy.xpath("//input[@id='mat-input-1']").type("Abh@1234");
        cy.wait(4000);
        cy.get("mat-icon[role='img']").click();








    })

})
  