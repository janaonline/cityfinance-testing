describe("GFC form", () => {
   
    it("Verify URL and title of the web page", () => {
    cy.visit("https://www.janaagraha.org/what-we-do/civic-participation/");
    // cy.url().should("eq", "https://www.cityfinance.in/home");
    // cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
    // cy.get(".ds-i-c span:first-child").should("contain.text", "city");
    // cy.get(".ds-i-c span:last-child").should("contain.text", "finance.in");
  });
})
