import { contains } from "cypress/types/jquery";

describe("Home page", () => {
  beforeEach(function () {
    cy.visit("/Home");
  });

  it("Check homepage validations", () => {
    cy.xpath(
      "//img[@src='../../../../assets/M FIGMA/city-finance-ranking.png']"
    ).should("be.visible");
    cy.xpath("//button[@id='loginDrp']").should("be.visible");
    cy.xpath("//input[@id='mat-input-0']").should("be.visible");
    cy.xpath("//input[@id='mat-input-0']").type("state").clear();
    cy.wait(2000);

    cy.xpath("//input[@id='mat-input-0']").type("1234");
    cy.wait(3000);
    //  cy.xpath("//span[@class='mat-option-text']").should("be.visible");
    cy.wait(4000);
    cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[18]").trigger(
      "mouseover"
    );
    cy.wait(6000);
    cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[7]").trigger(
      "mouseover"
    );
    cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[21]").trigger(
      "mouseover"
    );

    cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[14]").trigger(
      "mouseover"
    );
    cy.xpath("(//img)[30]").eq(0).trigger("mouseover");
    cy.wait(5000);
    cy.get(".c-btn").click();
    cy.wait(6000);
  });

  it("Check homepage fuction", () => {
    cy.xpath(
      "//img[@src='../../../../assets/M FIGMA/city-finance-ranking.png']"
    ).click();
    cy.wait(6000);
    cy.xpath("//a[@class='navbar-brand']").click();
    cy.get("form input:first-child").type("Lucknow Cantt");
    cy.get("form button").click();
    cy.wait(6000);
    cy.get(".header").should("have.text", "Lucknow Cantt");
  });
});
