// import { contains } from "cypress/types/jquery";

describe("Home page", () => {
  beforeEach(function () {
    cy.visit("/Home");
  });

  it("Check homepage validations", () => {
    cy.get(".navbar-brand.cityLogo").should("be.visible");
    cy.get("#loginDrp").should("be.visible");
    cy.get("button[class='btn lnd-btn']").should("be.visible");
    cy.get(".stateMap").should("be.visible");
    cy.wait(2000);
    cy.get("#mat-input-0").type("state").clear();
    cy.wait(2000);
     cy.get("#mat-input-0").type("1234");
    cy.wait(3000);
    cy.wait(4000);

    
    cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[18]").trigger("mouseover");
    cy.wait(6000);
    cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[7]").trigger( "mouseover");
     cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[21]").trigger("mouseover");
     cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[14]").trigger("mouseover");
    cy.xpath("(//img)[30]").eq(0).trigger("mouseover");
     cy.wait(5000);
     cy.get(".c-btn").click();
     cy.wait(6000);
   });



   




   it("Check homepage fuction", () => {
    cy.get(".navbar-brand.cityLogo").click();
    cy.wait(6000);
    cy.xpath("//a[@class='navbar-brand']").click();
    cy.get("form input:first-child").type("Luckno");
   
   
   
    cy.get("div[role$='listbox'] span div div:first-child span").each(($el, index, $list) => {
      cy.log($el.text());
      
            if ($el.text().includes("Lucknow Cantt")) {
            $el.click();
            cy.wait(3000);
             cy.get(".header.mt-2.mb-1").contains("Lucknow Cantt");
      }});
          cy.xpath("//a[@class='navbar-bran]").click();
           cy.wait(5000)

     
     
     
       // cy.get(".pure-checkbox.ng-star-inserted label").each(($el, index, $list) => {
      //   cy.log($el.text());
      //   if ($el.text().includes("Andhra Pradesh")) {
      //   $el.click();
      //   cy.get(".header.mt-2.mb-1").contains("Andhra Pradesh");
      //   }});
  

  });
});
