import "cypress-file-upload";
require('cypress-xpath');
describe("test1", () => {
 
  it("should verify that the user is on the Homepage", () => {
    cy.visit("https://cityfinance.in/home");

    cy.url().should("eq", "https://cityfinance.in/home");
    cy.title().should("eq", "City finance");

    cy.get(".ds-i-c span:first-child").should("contain.text", "city");
    cy.get(".ds-i-c span:last-child").should("contain.text", "finance.in");
  });


  it("Verify navigation to the Ranking home page.", () => {
    cy.visit("https://staging.cityfinance.in/home");
    cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
    cy.get("img[src*='city-finance-ranking.png']").click();
    
  });

  it("Verify CFR home page", () => {
    cy.visit("https://staging.cityfinance.in/home");
    cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
    cy.get("img[src*='city-finance-ranking.png']").click(); 
    cy.get('button.d-block.btn-cfPrimary.fw-bold.mx-auto.mb-3').should("be.visible")
    cy.get('button.d-block.btn-cfPrimary.fw-bold.mx-auto.mb-3').click()
    cy.wait(3000)
    cy.get('a[href="/fc/cfr/home"]').eq(1).click({ force: true })

  
});

 it("Verify Navigation to the ulb ranking page", () => {
  cy.visit("https://staging.cityfinance.in/home");
  cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
  cy.get("img[src*='city-finance-ranking.png']").click(); 
  cy.get('button.d-block.btn-cfPrimary.fw-bold.mx-auto.mb-3').should("be.visible")
  cy.get('button.d-block.btn-cfPrimary.fw-bold.mx-auto.mb-3').click()
  cy.wait(3000)
  cy.get('a[href="/fc/cfr/home"]').eq(1).click({ force: true })
  cy.contains('p', '3').should("be.visible");
  cy.contains('p', '3').should("be.visible");
  cy.contains('p', '3').should("be.visible");


 });



it("Verify Navigation to the explore more section page", () => {
  cy.visit("https://staging.cityfinance.in/home");
  cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
  cy.get("img[src*='city-finance-ranking.png']").click(); 
  cy.get('button.d-block.btn-cfPrimary.fw-bold.mx-auto.mb-3').should("be.visible")
  cy.get('button.d-block.btn-cfPrimary.fw-bold.mx-auto.mb-3').click()
  cy.wait(3000);
  cy.get('a[href="/fc/cfr/home"]').eq(1).click({ force: true })
  cy.get('img[src="./assets/fiscal-rankings/down-arrow.gif"]').should("be.visible")
  cy.get('img[src="./assets/fiscal-rankings/down-arrow.gif"]').click();
  cy.get('img[src="assets/fiscal-rankings/scroll-to-top.png"]').should("be.visible");
  cy.get('img[src="assets/fiscal-rankings/scroll-to-top.png"]').click();
})



it("Verify Map in the homepage", () => {
  cy.visit("https://staging.cityfinance.in/home");
  cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
  cy.get("img[src*='city-finance-ranking.png']").click();
  cy.get('#map').scrollIntoView()
  cy.get('#map').should("be.visible");
  cy.contains('a', 'Survey of India (SOI)').should("be.visible")
  cy.contains('a', 'Survey of India (SOI)').click();


  cy.get('#map').scrollIntoView()
  cy.get('#map').should("be.visible");
cy.get('g')   
  .find('path')          
  .each(($path) => {
    
        cy.wrap($path).trigger('mouseover', { force: true });
        cy.wait(1000)
         
     
  });
  cy.get("div.indicator-items div i") 
.each(($el) => {
cy.wrap($el).should('be.visible');
cy.wait(3000); 
});

cy.contains('div', 'High Participation').find('i[style*="background: #0B8CC3"]').should("be.visible")
cy.contains('div', 'Low Participation').find('i[style*="background: #52b788"]').should("be.visible")
cy.contains('div', 'Hilly/ North Eastern State').find('i[style*="background: #d69f7e"]').should("be.visible")
cy.contains('div', 'Not Participated').find('i[style*="background: #E5E5E5"]').should("be.visible")






})
 

it("Verify Top performer ULB's Table in the homepage", () => {
  cy.visit("https://staging.cityfinance.in/home");
  cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
  cy.get("img[src*='city-finance-ranking.png']").click(); 
  cy.get('span.fw-bold.text-cfPrimary').scrollIntoView()
  cy.get('th').eq(0).contains('Population Category')
cy.get('th').eq(1).contains(' Category 1 States (High Participation) ')
  cy.get('th').eq(2).contains(' Category 2 States (Low Participation) ')
  cy.get('th').eq(3).contains(' Category 3 States (Hilly/ North-Eastern States) ')


})

it("Verify  View Participated and Ranked ULBs across States and UTs ", () => {
  cy.visit("https://staging.cityfinance.in/home");
  cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
  cy.get("img[src*='city-finance-ranking.png']").click();
  cy.get('#map').scrollIntoView()
  cy.get('button.btn.btn-cfPrimary').eq(2).should("be.visible")
  cy.wait(3000);
  cy.get('button.btn.btn-cfPrimary').eq(2).click();
  cy.wait(3000);
  cy.contains('span', 'Overview of Participated and Ranked ULBs across States and UTs');
  cy.get('a[href="/fc/cfr/home"]').should('be.visible');
  cy.contains('a', 'City Finance Ranking - Home').eq(0).click({ force: true });
})

it("Verify Navigation to Top ranking page", () => {
  cy.visit("https://staging.cityfinance.in/home");
  cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
  cy.get("img[src*='city-finance-ranking.png']").click();
   cy.get('#map').scrollIntoView()
  cy.get('button.btn.btn-cfPrimary').eq(3).should("be.visible")
  cy.wait(3000);
  cy.get('button.btn.btn-cfPrimary').eq(3).click();
  cy.wait(3000);
  cy.get('a[href="/fc/cfr/home"]').should('be.visible');
  cy.contains('a', 'City Finance Ranking - Home').click({ force: true });

})

it("Verify Ranking parameter section", () => {
  cy.visit("https://staging.cityfinance.in/home");
  cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
  cy.get("img[src*='city-finance-ranking.png']").click(); 
  cy.contains('h5','Resource Mobilization').scrollIntoView()
  cy.contains('h2', 'Ranking Parameters').should('be.visible')
  cy.wait(3000);
  cy.contains('p', 'The City Finance Ranking has been done on 15 Indicators').should('be.visible');
  cy.wait(3000);
  cy.contains('h5', 'Resource Mobilization').should('be.visible')
  cy.wait(3000);
  cy.contains('h5', 'Expenditure Performance').should('be.visible')
  cy.wait(3000);
  cy.contains('h5', 'Fiscal Governance').should('be.visible')



})


it("Verify Navigation to The resource mobilzation section", () => {
  cy.visit("https://staging.cityfinance.in/home");
  cy.get("img[src*='city-finance-ranking.png']").should("be.visible")
  cy.get("img[src*='city-finance-ranking.png']").click(); 
  cy.contains('h2', 'Ranking Parameters').should("be.visible")
  cy.get('img[src="./assets/fiscal-rankings/RM.svg"]').scrollIntoView()
  cy.wait(5000)
  cy.contains('button', 'Learn more').eq(0).click()
  cy.wait(3000);
  cy.contains('h3', 'Resource Mobilization').should("be.visible")
  cy.contains('p', '6').should("be.visible")
  cy.contains('p', '100').should("be.visible")
  cy.contains('p', 'Maximum Score for Each Indicator').should("be.visible")
  cy.contains('p', '600').should("be.visible")
  cy.contains('p', 'Maximum Score').should("be.visible")
  const optionValue = 'resourceMobilization';
  cy.get('select[aria-label="assestParametersDropdown"]')
    .select(optionValue); 
    cy.wait(3000);

    const optionValue1 = 'expenditurePerformance';
  cy.get('select[aria-label="assestParametersDropdown"]')
    .select(optionValue1);
    cy.wait(3000);


    const optionValue2 = 'fiscalGovernance';
  cy.get('select[aria-label="assestParametersDropdown"]')
    .select(optionValue2);
    cy.wait(3000);

    const optionValue3 = 'resourceMobilization';
  cy.get('select[aria-label="assestParametersDropdown"]')
    .select(optionValue3);
    cy.wait(3000);

    cy.get('table.mat-mdc-table tbody tr').eq(0) 
    .within(() => {
      cy.get('td').eq(0).should('contain.text', '1'); 
      cy.get('td').eq(1).should('contain.text', 'Total Budget size per capita (Actual Total Receipts)');
      cy.get('td').eq(2).should('contain.text', 'INR'); 
      cy.get('td').eq(3).should('contain.text', '100');
      cy.get('td').eq(4).should('contain.text', '[Total budget size (actual receipts) - total receipts for water supply and sanitation]/ ULB Population'); 
      cy.get('td').eq(5).should('contain.text', '(ULB number/ Highest ULB number) * Maximum score');
      cy.get('td').eq(6).should('contain.text', 'Higher the better');
    });
   cy.contains('a', 'City Finance Ranking - Home').should("be.visible")
   cy.contains('a', 'City Finance Ranking - Home').click({ force: true });
})



  it("Verify Navigation to The expenditure Performance section", () => {
    cy.visit("https://staging.cityfinance.in/home");
    cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
    cy.get("img[src*='city-finance-ranking.png']").click(); 
    cy.contains('h2', 'Ranking Parameters').should("be.visible")
      cy.get('img[src="./assets/fiscal-rankings/EP.svg"]').scrollIntoView()
  cy.wait(5000)
  cy.get('button[tabindex="0"]').eq(4).click();
   cy.wait(3000);

 cy.wait(3000);
    cy.contains('h3', 'Expenditure Performance').should("be.visible")
    cy.wait(3000)

  cy.contains('p', '3').should("be.visible")
  cy.contains('p', '100').should("be.visible")
  cy.contains('p', 'Maximum Score for Each Indicator').should("be.visible")
  cy.contains('p', '300').should("be.visible")
  cy.contains('p', 'Maximum Score').should("be.visible")

  const optionValue = 'resourceMobilization';
  cy.get('select[aria-label="assestParametersDropdown"]')
    .select(optionValue); 
    cy.wait(3000);

    const optionValue1 = 'expenditurePerformance';
  cy.get('select[aria-label="assestParametersDropdown"]')
    .select(optionValue1); 
    cy.wait(3000);


    const optionValue2 = 'fiscalGovernance';
  cy.get('select[aria-label="assestParametersDropdown"]')
    .select(optionValue2);
    cy.wait(3000);
    const optionValue3 = 'expenditurePerformance';
  cy.get('select[aria-label="assestParametersDropdown"]')
    .select(optionValue1);
    cy.wait(3000);

    cy.get('table.mat-mdc-table tbody tr').eq(0) 
    .within(() => {
      cy.get('td').eq(0).should('contain.text', '7');
      cy.get('td').eq(1).should('contain.text', ' Capital Expenditure per capita (3-year average) ');
      cy.get('td').eq(2).should('contain.text', ' INR ');
      cy.get('td').eq(3).should('contain.text', ' 100');
      cy.get('td').eq(4).should('contain.text', ' [Total capital expenditure - capex for water supply and sanitation]/ ULB Population '); 
      cy.get('td').eq(5).should('contain.text', ' (ULB number/ Highest ULB number) * Maximum score ');
      cy.get('td').eq(6).should('contain.text', ' Higher the  ');
    });

    cy.contains('a', 'City Finance Ranking - Home').should("be.visible")
    cy.contains('a', 'City Finance Ranking - Home').click({ force: true });

  })

  it("Verify Navigation to The Fiscal Governance section", () => {
    cy.visit("https://staging.cityfinance.in/home");
    cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
    cy.get("img[src*='city-finance-ranking.png']").click();
    cy.get('img[src="./assets/fiscal-rankings/EP.svg"]').scrollIntoView()
    cy.get('button[tabindex="0"]').eq(5).click();
    cy.wait(3000);
    cy.wait(3000);
    cy.contains('h3', 'Fiscal Governance').should("be.visible")
    cy.wait(3000)
    cy.contains('a', 'City Finance Ranking - Home').should("be.visible")
    cy.contains('a', 'City Finance Ranking - Home').click({ force: true });

  })


  it("Verify Guidelines,Broucher,Videos section", () => {
    cy.visit("https://staging.cityfinance.in/home");
    cy.get("img[src*='city-finance-ranking.png']").should("be.visible");
    cy.get("img[src*='city-finance-ranking.png']").click(); 
    cy.contains('p', 'Guidelines').should("be.visible")  
    cy.get('.download-link.cursor-pointer').eq(0).scrollIntoView()
    cy.wait(5000);
    cy.contains('p', 'Download').click();
     cy.wait(3000)
    cy.xpath("//mat-icon[normalize-space()='close']").click();
      

    

  })


  it('Ranking of ulbs page heading components',()=>{
    cy.visit("https://staging.cityfinance.in/fc/cfr/top-rankings");
    cy.get("input[placeholder='Search ULB...']").should("be.visible").and("have.attr", "placeholder", "Search ULB...");
cy.get('.mt-4.fw-bold').should("be.visible").should('have.text','Ranking of ULBs');
cy.get("section[class='text-center'] p").should('be.visible');
cy.get('input[placeholder="Search ULB..."]').click();
cy.wait(5000);
cy.get('input[role="combobox"][placeholder="Search ULB..."]').should('be.visible').click().type('Amdavad');
 cy.get('mat-option') .first().click();
 cy.wait(5000);
  cy.get('a[href="/fc/cfr/top-rankings"]').click({ force: true });
  cy.wait(1000)
  cy.get('input[placeholder="Search ULB..."]').click();
  cy.wait(5000);
  cy.get('input[role="combobox"][placeholder="Search ULB..."]').should('be.visible').click().type('mysore');
  cy.wait(5000);
  cy.get('mat-option') .first().click();
  cy.get(".swal2-html-container").should("be.visible").contains("Mysore Municipal Corporation is not ranked.");
  cy.get('.swal2-confirm.swal2-styled').click();
  cy.get('.mat-icon.cursor-pointer').click();
    
    cy.get('.mat-mdc-select-value').eq(0).click();
    const optionsToSelect = ['High Participation', 'Low Participation', 'Hilly/North Eastern States'];
    cy.get('.mat-mdc-select-panel .mat-mdc-option').each(($option, index, $list) => {
      cy.get('.mat-mdc-select-value').eq(0).click({ force: true })
       const optionText = $option.find('span').text().trim();
       
         if (optionsToSelect.includes(optionText))
           {
          cy.wrap($option).click();
          cy.wait(2000);
       
          }  


      });
       
    cy.get('.mat-mdc-select-value').eq(1).click();
     const popcat = ['All Categories', '4M+', '1M to 4M','100K to 1M','<100K'];
    cy.get('.mat-mdc-select-panel .mat-mdc-option').each(($option, index, $list) => {
      cy.get('.mat-mdc-select-value').eq(1).click({ force: true });

       const popcatText = $option.find('span').text().trim();
       
       if (popcat.includes(popcatText)) {
        cy.wrap($option).click();

         cy.wait(2000);
       }
        
        
      });



      cy.get('.mat-mdc-select-value').eq(2).click();
      cy.contains('.mdc-list-item__primary-text', 'Uttarakhand').click();
      cy.get('.mat-mdc-paginator-range-label').should("be.visible").contains('1 – 10 of 38');
      cy.wait(2000);
      cy.contains('button', 'Reset').click();
      cy.wait(2000);
     

       


    })


// it('State and Population Category Functionality',()=>{
//     cy.visit("https://staging.cityfinance.in/fc/cfr/top-rankings");
//     cy.get('.card-clr p').should("be.visible");
//     cy.get('mat-label').contains('State Sub-Category');
//     cy.get('mat-label').contains('Population Category');
//     cy.get('mat-label').contains('Select a State');

//     cy.get('mat-option').contains('Desired Option').click();

//     cy.get("input[placeholder='Search']").type("Gujarat", { force: true }); 
  
// cy.get('.lazyContainer li')
// .should('exist')  
// .click();  
// cy.wait(1000);
// cy.get('span').contains('Gujarat').should('be.visible');  
// cy.get('select[formcontrolname="populationBucket"]')
// .find('option')
// .each(($option) => {
   
//   cy.get('select[formcontrolname="populationBucket"]').select($option.val());
// });

// cy.wait(1000);

// })
// it('Radio toggle Button group functionality',()=>{
//     cy.visit("https://dev.cityfinance.in/fc/cfr/top-rankings");
//       const expectedLabels = [
// 'Overall', 
// 'Resource Mobilization', 
// 'Expenditure Performance', 
// 'Fiscal Governance'
// ];


// cy.get('.btn-group label').each(($label, index) => {
// cy.wrap($label).should('be.visible');
// const actualText = $label.text().trim();
// expect(actualText).to.equal(expectedLabels[index]);
// cy.log(`Label ${index + 1}: ${actualText}`);
// cy.wrap($label).click();
// });





// })
// it("Map Functionality testing",()=>{
// cy.visit("https://dev.cityfinance.in/fc/cfr/top-rankings");
// cy.get('.stateMap').should("be.visible");
// cy.get("img[alt='Marker']").should('be.visible');
// cy.get("div.indicator-items div i") 
// .each(($el) => {
// cy.wrap($el).should('be.visible');
// });
// cy.get('g')   
//   .find('path')          
//   .each(($path) => {
    
//         cy.wrap($path).trigger('mouseover', { force: true });
//         cy.wait(1000);
        
       
//         cy.get('b').should('exist').then(($b) => {
//             if ($b.length > 0) {
//               cy.wrap($b).invoke('text')  
//                 .then((text) => {
//                   cy.log(text);  
//                 });
//             } else {
//               cy.log('No <b> element found');
//             }
//           });
         
     
//   });

// })
// it("Table UI and pagination functionality testing",()=>{
// cy.visit("https://dev.cityfinance.in/fc/cfr/top-rankings");



// cy.wait(1000);
// cy.contains('a', 'Amdavad Municipal Corporation').invoke('removeAttr', 'target').click();
// cy.wait(1000);
// cy.get('app-ulb-details-header h3').should('include.text', 'Amdavad Municipal Corporation');


// cy.visit("https://dev.cityfinance.in/fc/cfr/top-rankings");
// cy.get("select[formcontrolname='populationBucket']").select("All Categories");
// cy.get('.mat-mdc-paginator-page-size-label').should('have.text',' Items per page: ')

//     cy.get('mat-select').click();
//     cy.get('.mat-mdc-select-panel mat-option').each(($option) => {
       
//         const optionText = $option.find('span').text().trim();
        
      
//         if (optionText === '5') {
      
//           cy.wrap($option).click();
//         }
//       });
//       cy.get("button[aria-label='Last page']").click();  
//       cy.wait(1000);
//     cy.get("button[aria-label='First page']").click();  
//     cy.wait(1000);
//     cy.get("button[aria-label='Next page']").click();  
//       cy.wait(1000);
//     cy.get("button[aria-label='Previous page']").click(); 
//     cy.wait(3000);
//     const expectedHeaders = [
// 'Rank', 
// 'ULB Name', 
// 'Total ULB Score', 
// 'RM Score', 
// 'EP Score', 
// 'FG Score'
// ];


// cy.get('thead th').each(($header, index) => {
// // cy.wrap($header).should('be.visible');

// const actualText = $header.text().trim();better


// cy.log(`Header ${index + 1}: ${actualText}`);

// expect(actualText).to.equal(expectedHeaders[index]);
// });
// })

  })

