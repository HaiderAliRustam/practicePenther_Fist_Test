const faker = require('faker');
/// <reference types="cypress" />

describe("First Test Case for Practice Penther" ,()=>
{
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
    it("First Test case Login Practice Penther", ()=>
    {
        cy.get(".pp-icon-contacts").click()
        

        const randomName = faker.name.findName();
        const randomEmail = faker.internet.email();
          cy.log(randomName)

        cy.get("#Account_PrimaryContact_FirstName" ).type(randomName)
        cy.get("#Account_PrimaryContact_Email").type(randomEmail)
        
    })

})