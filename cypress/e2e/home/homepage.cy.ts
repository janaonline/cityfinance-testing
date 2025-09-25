// import { contains } from "cypress/types/jquery";

describe("Home page", () => {
  beforeEach(function () {
    cy.visit("https://www.cityfinance.in/fc_grant");
  });

  it("Check homepage validations", () => {
    cy.contains('a.nav-link', 'Dashboard').should('be.visible')
        cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
        cy.contains('button', 'Search').should('be.visible');
        cy.get('#map-container').should('be.visible')
        cy.wait(2000);
        cy.get('input[placeholder="Search for City or State"]')
  .type('Lucknow', { force: true })
    cy.get('mat-option').contains('Lucknow Cantt').click()



    
    // cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[18]").trigger("mouseover");
    // cy.wait(6000);
    // cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[7]").trigger( "mouseover");
    //  cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[21]").trigger("mouseover");
    //  cy.xpath("(//*[name()='path'][@class='leaflet-interactive'])[14]").trigger("mouseover");
    // cy.xpath("(//img)[30]").eq(0).trigger("mouseover");
    //  cy.wait(5000);
    //  cy.get(".c-btn").click();
    //  cy.wait(6000);
   });
  })
   
   
    // cy.get("div[role$='listbox'] span div div:first-child span").each(($el, index, $list) => {
    //   cy.log($el.text());
      
    //         if ($el.text().includes("Lucknow Cantt")) {
    //         $el.click();
    //         cy.wait(3000);
    //          cy.get(".header.mt-2.mb-1").contains("Lucknow Cantt");
    //   }});
    //       cy.xpath("//a[@class='navbar-bran]").click();
    //        cy.wait(5000)

     
     
     
       // cy.get(".pure-checkbox.ng-star-inserted label").each(($el, index, $list) => {
      //   cy.log($el.text());
      //   if ($el.text().includes("Andhra Pradesh")) {
      //   $el.click();
      //   cy.get(".header.mt-2.mb-1").contains("Andhra Pradesh");
      //   }});
  

  

