const faker = require('faker');
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // we can choose to ignore the error and continue the test
    return false
  })
  


describe("First Test Case for Practice Penther" ,()=>
{
   
    Cypress.env('randomName' , faker.name.findName());
    Cypress.env("randomEmail", faker.internet.email());
    // const randomEmail = faker.internet.email();
     beforeEach(()=>
      {
        cy.log("Login Every Time When Test is Running")
        cy.visit("https://devops.practicepanther.com/")
        cy.get("input[placeholder='Email'][name='UserName']")
        .type("hafizhaideraliuet+101@gmail.com")
        cy.get("input[placeholder='Password']").
        type("123456")
        cy.get(".login-action-button.btn.green.btn-block.loading-btn").
        click()
        cy.get("div[class='col-md-12'] h2").should("have.text" ,"DEBUG MODE"  )
        cy.log("Login Test is passed")
   
        


     })
    
    it("Rendum Name  is that : ",()=>{
        cy.get(".pp-icon-contacts").click()
        cy.get("#Account_PrimaryContact_FirstName").
        type(Cypress.env('randomName')); 
        cy.get("#saveBtnText").click();

        cy.get(".col-lg-10 > :nth-child(1) > .col-lg-6 > .form-group > .col-md-8 > .form-control-static").invoke("text").then((values)=>{
            cy.log(values)
        })

        cy.log("haider ali")
        //cy.log(Cypress.env('randomName'));
        //cy.log(Cypress.env("randomEmail"))
    })
    it("Secont Name " , ()=>{
        //cy.get("#saveBtnText").click()

        cy.visit("https://devops.practicepanther.com/Account/")
        cy.get("#searchTextBoxAccount")
        .type(Cypress.env('randomName'));
        cy.wait(10000);
        cy.get('tbody > tr:first-child > td:nth-child(4) > div:first-child>[class =grid-name]')
        .click();
        cy.get(".fa.fa-pencil").click()
        
        
        cy.get("#Account_PrimaryContact_Email").clear().
        type(Cypress.env("randomEmail"));
        cy.get("button[onclick='submitForm(this);']").
        click()
        
        


        //cy.get('#searchTextBoxAccount').type('Ali') 
       
        //cy.get("button[aria-label='Contacts'] div[class='makeStyles-lowerMenuButtonText-78']").click()
        const randomEmail2 = faker.internet.email();
        cy.log(randomEmail2)
        cy.log(Cypress.env('randomName'));
        cy.log(Cypress.env("randomEmail"))
    })
    it("Delete Contect " , ()=>
    {
        cy.visit("https://devops.practicepanther.com/Account/")
        cy.get("#searchTextBoxAccount")
        cy.wait(1000);
        cy.get('tbody > tr:first-child > td:nth-child(4) > div:first-child>[class =grid-name]')
        .click();
        cy.get(".fa.fa-trash-o").click()
        cy.get("i[class='fa fa-check ']").click();
        //cy.get(".body > div:nth-child(57) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)")
        

    })
   

})