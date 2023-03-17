

import Rendum from '../../support/Rendumclass';


describe('Example Test', () => {
  const name = new Rendum;

  it.only("First Test case for xpath" , ()=>{
    cy.visit("https://automationteststore.com/")

    name.Add('About Us')
    
   //Adda('Contact Us');

    
})



  it('should generate a random name', () => 
  {
    name.randomEmail()
    
    cy.log(`The result is: ${name}`);
    name.rendumEmail()
    
  });

  it("hgvrfhbwdvibvuebvr",()=>
  {

    
    const namee =rendumEmail()

    namee.randomEmail()

  })


});
