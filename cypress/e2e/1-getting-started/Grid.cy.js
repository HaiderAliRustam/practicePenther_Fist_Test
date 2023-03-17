import BTNXpath from "../../support/ButtonXpath"

describe("Count The number of rows in Grid" , ()=>{
  const BTN =new BTNXpath;


  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // we can choose to ignore the error and continue the test
    return false
  })

    beforeEach(()=>
    {
      cy.log("Login Every Time When Test is Running")
      cy.visit("https://devops.practicepanther.com/")
      cy.get("input[placeholder='Email'][name='UserName']")
      .type("jmerwitzer+devops2_4@practicepanther.com")
      cy.get("input[placeholder='Password']").
      type("panther123")
      cy.get(".login-action-button.btn.green.btn-block.loading-btn").
      click()
      cy.get("div[class='col-md-12'] h2").should("have.text" ,"DEBUG MODE"  )
      cy.log("Login Test is passed")
 
      


   })
   it.only("Check Variable on Xpath" , ()=>{
    BTN.NewBTN("Matter")


    



    
   })









    
})