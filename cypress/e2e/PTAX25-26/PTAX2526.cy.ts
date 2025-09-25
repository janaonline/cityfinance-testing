import "cypress-file-upload";
import { eq } from "cypress/types/lodash";
import * as XLSX from 'xlsx';
describe("PTAX form", () => {
   
it("Verify URL and title of the web page", () => {
    cy.visit("https://www.cityfinance.in/home");
    cy.url().should("eq", "https://www.cityfinance.in/home");
    cy.title().should("eq", "City Finance - Financial Data of 4,000+ Indian Cities");
  });
  it("Verify XVFC page Navigation", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");

    cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').should("be.visible").contains("Login");
    cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
    // cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').should("be.visible");

    cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').each(
      ($el, index, $list) => {
        const option = $el.find("a").text();
        if (option.includes("XV FC Grant")) {
          cy.wrap($el).click();
          cy.wait(1000);
          cy.url().should("eq", "https://www.cityfinance.in/fc_grant");
        }
      }
    );
  });

   it("Navigate to login Page", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
        cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();

    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
  });

  it("ULB login page UI", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
             cy.get('input[type="submit"]').contains('LOGIN').click();


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

  it("successful ulb login", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
             cy.get('input[type="submit"]').contains('LOGIN').click();

    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env('Ptax_id'));
    cy.get('input[formcontrolname="password"]').type(Cypress.env('Ptax_password'));
    cy.get("button[type='submit']").click();
  });


  it("Invalid Email valid password", () => {
   cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type("808800");
    cy.get('input[formcontrolname="password"]').type(Cypress.env("Ptax_password"));
    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "User not found");
  });

   it("Invalid Password valid email", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("Ptax_id"));
    cy.get('input[formcontrolname="password"]').type("ulb@124");
    cy.get("button[type='submit']").click();
    cy.get(".error-message span")
      .should("be.visible")
      .and("have.text", "Invalid credentials.");
  });

   it("Both Invalid Username and Password", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type("800964");
    cy.get('input[formcontrolname="password"]').type("ulb@124");
    cy.get("button[type='submit']").click();
  });

 it("eye icon", () => {
    cy.visit("https://www.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
         cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click()
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



  it("Navigate to PTAX form", () => {
    // cy.visit("https://www.cityfinance.in/fc_grant");
    //  cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
    //      cy.get('i.bi-box-arrow-in-right').eq(0).click();
    // cy.get('input[type="submit"]').contains('LOGIN').click();
    // cy.get("#ulb i").click();
    // cy.get('input[formcontrolname="email"]').type(Cypress.env("Ptax_id"));
    // cy.get('input[formcontrolname="password"]').type(Cypress.env("Ptax_password"));
    // cy.get("button[type='submit']").click();
    // cy.contains("a", "15th FC Grants").click();
    // cy.wait(3000);
    // cy.contains("button", "2025-26").click();
    // cy.wait(3000);
    // cy.wait(1000);
    // cy.get("a").contains("span", "Details of Property Tax and User Charges").click();

  })

  it("Filling primary questions", () => {
    cy.visit("https://staging.cityfinance.in/fc_grant");
    cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
    cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("Ptax_id"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("Ptax_password"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2025-26").click();
    cy.wait(3000);

    cy.wait(1000);
    cy.get("a").contains("span", "Details of Property Tax and User Charges").click();
    cy.xpath("(//span[@class='mat-radio-label-content' and contains(text(), 'Yes')])[1]").click(); // First Yes
    cy.xpath("(//span[@class='mat-radio-label-content' and contains(text(), 'Yes')])[2]").click(); // Second Yes
    cy.get('.mat-datepicker-toggle-default-icon').click();
    cy.get('.mat-calendar-body-today').click();
    cy.get('select[formcontrolname="value"]').select('ULB');
    cy.get('input[type="file"]').attachFile('PTAX.pdf');
  })

  it("Validating Property Tax Demand Details", () => {
    cy.visit("https://staging.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
    cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("Ptax_id"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("Ptax_password"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2025-26").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Details of Property Tax and User Charges").click();
    cy.xpath("(//span[@class='mat-radio-label-content' and contains(text(), 'Yes')])[1]").click();// First Yes
    cy.xpath("(//span[@class='mat-radio-label-content' and contains(text(), 'Yes')])[2]").click();// Second Yes
    cy.get('.mat-datepicker-toggle-default-icon').click();
    cy.get('.mat-calendar-body-today').click();
    cy.get('select[formcontrolname="value"]').select('ULB');
    cy.get('input[type="file"]').attachFile('PTAX.pdf');
   const inputFields = 'input.form-control';
    const ExcelJS = require('exceljs');
    const radioButtonYes = '#mat-radio-14 > label > span.mat-radio-label-content';  // Radio button for "Yes"
    const radioButtonNo = '#mat-radio-15 > label > span.mat-radio-label-content';  // Radio button for "No"

    function readExcel(filePath) {
      const workbook = new ExcelJS.Workbook();
      return cy.readFile(filePath, 'binary').then((fileContent) => {
        return workbook.xlsx.load(fileContent).then(() => {
          const worksheet = workbook.getWorksheet(1); // First worksheet
          const data = [];
          
          worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) { // Skipping the header row
              data.push({
                Question1_9: row.getCell(1).value,
                Question1_10: row.getCell(2).value,
                Question1_11: row.getCell(3).value,
                Question1_12: row.getCell(4).value,
                Question1_13: row.getCell(5).value,
                Question1_13_1: row.getCell(6).value,
                Question1_14: row.getCell(7).value,

                Question1_14_1: row.getCell(8).value,
                radioButtonNo1_15: row.getCell(9).value,
                Question1_17: row.getCell(10).value,
                Question1_18: row.getCell(11).value,
                Question1_19: row.getCell(12).value,


                
              });
            }
          });
          return data;
        });
      });
    }
    
        
        readExcel('cypress/fixtures/PTAXEXTRACT.xlsx').then((data) => {
          // Loop through each row and fill out the form
          data.forEach((row) => {
            cy.get(inputFields).eq(4).clear().type(row.Question1_9);
            cy.get(inputFields).eq(14).clear().type(row.Question1_10);
            cy.get(inputFields).eq(9).clear().type(row.Question1_11);
            cy.get(inputFields).eq(19).clear().type(row.Question1_12);
            // cy.get('.btn.btn-primary').eq(1).click();
            // cy.get('#swal2-input').type('Testing');
            // cy.get('.swal2-confirm.swal2-styled').click();
            // cy.get('.btn.btn-primary').eq(2).click();
            // cy.get('#swal2-input').type('Testing');
            // cy.get('.swal2-confirm.swal2-styled').click();
            // cy.contains('button', 'OK').click();

            cy.get('.btn.btn-primary').eq(3).click();
            cy.get('#swal2-input').type('Testing');
            cy.get('.swal2-confirm.swal2-styled').click();


            // cy.get(inputFields).eq(25).clear().type(row.Question1_13, { force: true });
            // cy.get(inputFields).eq(22).clear().type(row.Question1_14, { force: true });

          //  cy.get(inputFields).eq(29).type(row.Question1_13_1);
          //   cy.get(inputFields).eq(31).type(row.Question1_14_1);
            // cy.get('#mat-radio-14 > label > span.mat-radio-label-content').click();
            const q10 = parseFloat(row.Question1_10);
            const q11 = parseFloat(row.Question1_11);

            if (isNaN(q10) || isNaN(q11)) {
            throw new Error(`Invalid numeric values: Question1_10 = ${row.Question1_10}, Question1_11 = ${row.Question1_11}`);
}            const expectedSum = q10 + q11;
             cy.log(`Expected Sum (Q10 + Q11): ${expectedSum}`)
             cy.get(inputFields).eq(4).invoke('val').then((val1) => {
             const actualVal = parseFloat(val1 as string);
              if (isNaN(actualVal)) {
             throw new Error(`Invalid number in input field (Question 1.9): ${val1}`);
  }          cy.log(`Actual Value in Field (Question 1.9): ${actualVal}`);
            expect(actualVal).to.equal(expectedSum);

});
})


});
      
     })




it("Validating Property Tax Collection Details", () => {
    cy.visit("https://staging.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
    cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("Ptax_id"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("Ptax_password"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2025-26").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Details of Property Tax and User Charges").click();
   
   const inputFields = 'input.form-control';
    const ExcelJS = require('exceljs');

    function readExcel(filePath) {
      const workbook = new ExcelJS.Workbook();
      return cy.readFile(filePath, 'binary').then((fileContent) => {
        return workbook.xlsx.load(fileContent).then(() => {
          const worksheet = workbook.getWorksheet(1); // First worksheet
          const data = [];
          
          worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) { // Skipping the header row
              data.push({
               
                Question1_17: row.getCell(10).value,
                Question1_18: row.getCell(11).value,
                Question1_19: row.getCell(12).value,
                Question1_20: row.getCell(13).value,
                Question1_21_1: row.getCell(14).value,
               Question1_22_1: row.getCell(15).value,





                
              });
            }
          });
          return data;
        });
      });
    }
    
        
        readExcel('cypress/fixtures/PTAXEXTRACT.xlsx').then((data) => {
          data.forEach((row) => {
          

           cy.get(inputFields).eq(36).clear().type(row.Question1_17, { force: true });
           cy.get(inputFields).eq(41).clear().type(row.Question1_18, { force: true });
           cy.get(inputFields).eq(46).clear().type(row.Question1_19, { force: true });
           cy.get(inputFields).eq(51).clear().type(row.Question1_20, { force: true });


           cy.get('.btn.btn-primary').eq(5).click();
            cy.get('#swal2-input').type('Testing');
            cy.get('.swal2-confirm.swal2-styled').click();
           
           
            cy.get('.btn.btn-primary').eq(7).click();
            cy.get('#swal2-input').type('Testing');
            cy.get('.swal2-confirm.swal2-styled').click();


        cy.get(inputFields).eq(57).clear().type(row.Question1_21_1, { force: true });
        cy.get(inputFields).eq(63).clear().type(row.Question1_22_1, { force: true });
        cy.contains('button', 'Save as Draft').click();
        cy.contains('button', 'OK').click();



            const q17 = parseFloat(row.Question1_18);
            const q18 = parseFloat(row.Question1_19);

            if (isNaN(q17) || isNaN(q18)) {
            throw new Error(`Invalid numeric values: Question1_18 = ${row.Question1_18},Question1_19 = ${row.Question1_19}`);
}            const expectedSum = q17 + q18;
             cy.log(`Expected Sum (Q17+ Q18): ${expectedSum}`)
             cy.get(inputFields).eq(36).invoke('val').then((val1) => {
             const actualVal = parseFloat(val1 as string);
              if (isNaN(actualVal)) {
             throw new Error(`Invalid number in input field (Question1_17): ${val1}`);
  }          cy.log(`Actual Value in Field (Question1_17): ${actualVal}`);
            expect(actualVal).to.equal(expectedSum);

});
})


});
      
     })


it("Validating Property Register Details", () => {
    cy.visit("https://staging.cityfinance.in/fc_grant");
     cy.get('button.mat-mdc-menu-trigger[aria-haspopup="menu"]').click();
    cy.get('i.bi-box-arrow-in-right').eq(0).click();
    cy.get('input[type="submit"]').contains('LOGIN').click();
    cy.get("#ulb i").click();
    cy.get('input[formcontrolname="email"]').type(Cypress.env("Ptax_id"));
    cy.get('input[formcontrolname="password"]').type(Cypress.env("Ptax_password"));
    cy.get("button[type='submit']").click();
    cy.contains("a", "15th FC Grants").click();
    cy.wait(3000);
    cy.contains("button", "2025-26").click();
    cy.wait(3000);
    cy.wait(1000);
    cy.get("a").contains("span", "Details of Property Tax and User Charges").click();
   
   const inputFields = 'input.form-control';
    const ExcelJS = require('exceljs');

    function readExcel(filePath) {
      const workbook = new ExcelJS.Workbook();
      return cy.readFile(filePath, 'binary').then((fileContent) => {
        return workbook.xlsx.load(fileContent).then(() => {
          const worksheet = workbook.getWorksheet(1); // First worksheet
          const data = [];
          
          worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) { // Skipping the header row
              data.push({
               
             
               Question2_1: row.getCell(16).value,
               Question2_2: row.getCell(17).value,
               Question2_3: row.getCell(18).value,
               Question2_4: row.getCell(19).value,
               Question2_5: row.getCell(20).value,
               Question2_6: row.getCell(21).value,
               Question2_7: row.getCell(22).value,
               Question2_8: row.getCell(23).value,
               Question2_9: row.getCell(24).value,
               Question2_10: row.getCell(25).value,
               Question2_11: row.getCell(25).value,
               Question2_12: row.getCell(26).value,
               Question2_13: row.getCell(27).value,
               Question2_14: row.getCell(28).value,
               Question2_15: row.getCell(29).value,
               Question2_16: row.getCell(30).value,
               Question2_17: row.getCell(31).value,
               Question2_18: row.getCell(32).value,
               Question2_19: row.getCell(33).value,
               Question2_20: row.getCell(34).value,
               Question2_21: row.getCell(35).value,
               Question2_22: row.getCell(36).value,
               Question2_23: row.getCell(37).value,
               Question2_24: row.getCell(38).value,

              Question2_26_1: row.getCell(39).value,
               Question2_27_1: row.getCell(40).value,
               Question2_28_1: row.getCell(41).value,
               Question2_29_1: row.getCell(42).value,
               Question3_1: row.getCell(43).value,
               Question3_2: row.getCell(44).value,





                
              });
            }
          });
          return data;
        });
      });
    }
    
        
        readExcel('cypress/fixtures/PTAXEXTRACT.xlsx').then((data) => {
          // Loop through each row and fill out the form
          data.forEach((row) => {
          

           cy.get(inputFields).eq(68).clear().type(row.Question2_1, { force: true });
           cy.get(inputFields).eq(73).clear().type(row.Question2_2, { force: true });
           cy.get(inputFields).eq(78).clear().type(row.Question2_3, { force: true });
           cy.get(inputFields).eq(83).clear().type(row.Question2_4, { force: true });

           cy.get(inputFields).eq(88).clear().type(row.Question2_5, { force: true });
           cy.get(inputFields).eq(93).clear().type(row.Question2_6, { force: true });
           cy.get(inputFields).eq(98).clear().type(row.Question2_7, { force: true });
           cy.get(inputFields).eq(103).clear().type(row.Question2_8, { force: true });
           cy.get(inputFields).eq(108).clear().type(row.Question2_9, { force: true });
           cy.get(inputFields).eq(113).clear().type(row.Question2_10, { force: true });
           cy.get(inputFields).eq(118).clear().type(row.Question2_11, { force: true });
           cy.get(inputFields).eq(123).clear().type(row.Question2_12, { force: true });
           cy.get(inputFields).eq(128).clear().type(row.Question2_13, { force: true });
           cy.get(inputFields).eq(133).clear().type(row.Question2_14, { force: true });
           cy.get(inputFields).eq(138).clear().type(row.Question2_15, { force: true });
           cy.get(inputFields).eq(143).clear().type(row.Question2_16, { force: true });
           cy.get(inputFields).eq(148).clear().type(row.Question2_17, { force: true });
           cy.get(inputFields).eq(153).clear().type(row.Question2_18, { force: true });
           cy.get(inputFields).eq(158).clear().type(row.Question2_19, { force: true });
           cy.get(inputFields).eq(163).clear().type(row.Question2_20, { force: true });
           cy.get(inputFields).eq(168).clear().type(row.Question2_21, { force: true });
           cy.get(inputFields).eq(173).clear().type(row.Question2_22, { force: true });
           cy.get(inputFields).eq(178).clear().type(row.Question2_23, { force: true });
           cy.get(inputFields).eq(183).clear().type(row.Question2_24, { force: true });


           cy.get('.btn.btn-primary').eq(9).click();
           cy.get('#swal2-input').type('Testing');
           cy.get('.swal2-confirm.swal2-styled').click();


           cy.get(inputFields).eq(189).clear().type(row.Question2_26_1, { force: true });
           cy.get(inputFields).eq(195).clear().type(row.Question2_27_1, { force: true });
           cy.get(inputFields).eq(201).clear().type(row.Question2_28_1, { force: true });
           cy.get(inputFields).eq(207).clear().type(row.Question2_29_1, { force: true });
           cy.get(inputFields).eq(212).clear().type(row.Question3_1, { force: true });
           cy.get(inputFields).eq(217).clear().type(row.Question3_2, { force: true });

           cy.get('input[type="file"]').eq(2).selectFile('cypress/fixtures/ptax.pdf', {
           force: true });

          cy.xpath("(//span[@class='mat-radio-label-content' and contains(text(), 'No')])[4]").click();
          cy.xpath("(//span[@class='mat-radio-label-content' and contains(text(), 'No')])[5]").click(); 



           cy.contains('button', 'Save as Draft').click();
           cy.contains('button', 'OK').click();


         





          })
        })
      })





})
