const faker = require('faker');

class Rendum{
    rendumName()
    {
        const randomName = faker.name.findName();
        cy.log(randomName);
    }
    
    rendumEmail()
    {
         const randomEmail = faker.internet.email();
          cy.log(randomEmail);
    }
    Add ( ) 
    {
      const linkText = "Contact Us";

      cy.xpath(`//a[normalize-space()='${linkText}']`).click()

  
    }
    


    
      

}
export default Rendum