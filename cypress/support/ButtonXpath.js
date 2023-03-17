class BTNXpath{
    NewBTN(contactTex)
    {
        //const contactText = 'Contact';
       
    cy.get('div[style="display: inline-block;"] button').click()
    cy.get('div[role=tooltip]').trigger("mouseover",{force: true});
    cy.xpath(`//div//a//button//span[@class='newItemButtonSpan' and text()='${contactText}']`)
   // cy.xpath(`//div//a//button//span[@class='newItemButtonSpan' and text()='${contactText}']` )
      .click({force: true});
      

    }
}
export default BTNXpath;