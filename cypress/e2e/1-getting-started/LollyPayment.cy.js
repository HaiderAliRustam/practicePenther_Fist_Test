const faker = require('faker');
import React from 'react'
import Rendum  from '../../support/Rendumclass';
<iframe src="https://payments-dev.lollylaw.com/" allow-cross-origin></iframe>


Cypress.on('uncaught:exception', (err, runnable) => {
    // we can choose to ignore the error and continue the test
    return false
  })



describe("Check Lolly Payment " ,()=>{
   
   // const name = new Rendum;

    it("Test Case for Lolly Payment ", ()=>{
        const randomName = faker.name.findName();
        const randomEmail = faker.internet.email();


        //cy.visit("")
 
        cy.visit('https://payments-dev.lollylaw.com/onelink/4b6770d7-a8f4-4213-a4fa-5107e71954b1');
        cy.wait(2000)
        
        




        cy.get("input[placeholder='Enter Amount']").type("1")
        cy.get("input[placeholder='First Name']").type(randomName);
        cy.get("input[placeholder='Last Name']").type("01")
        cy.get("input[placeholder='Email']").type(randomEmail);



        // Get the iframe element and its body
      cy.get('span iframe[title="Secure text input frame"]').click().then(($iframe) => 
      {
        const $body = $iframe.contents().find('body');
  
        // Click the button inside the iframe
        $body.find('button').click();
  
        // Fill the input field inside the iframe
        $body.find('input').type('example text');
      });
  
    // cy.get('span iframe[title="Secure text input frame"]').then(($iframe) => {
    //     const $body = $iframe.contents().find('body');
    //     $body.append('<p>Hello World</p>');
    //     $iframe[0].contentWindow.top = window;
    //     $iframe[0].contentWindow.opener = window;
    //   });
      



    })
})