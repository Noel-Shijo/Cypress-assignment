describe('template spec', () => {
  it('Form with upload flow', function() {
    cy.viewport(1280, 800);
    cy.login('leonojihs@gmail.com', 'Qwerty@123');
    cy.visitAutomation();
    cy.createOption('Form');
    cy.Fill_in_details();
    
    // Locate and click the Text Box button using multiple attributes
    cy.get('button[name="item-button"][data-indent="1"]').click();
    /* I'm not sure why, but I tried almost all locators to find the "text box and select file" buttons, but none worked. It would be easier to check with the developers and add automation specific tags. 
    //cy.get('button[name="item-button"]','Select File').click();

    //cy.get('span.clipped-text clipped-text--no_wrap editor-palette-item__child-label','Select File').click()
    cy.wait(10000);
    //cy.contains('Select File').should('exist')

    cy.xpath('//button[@id="root"]/div[1]/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/div[2]/div/div[16]/div/button').click();

    // Locate and click the Text Box button using multiple attributes
    //cy.get('button[name="item-button"]').eq(39).click();

    This is used to drag and drop 
     cy.get('.sourceitem').drag('.targetitem');
     and this is used for file upload. 
     cy.document().selectFile('file.json', { action: 'drag-drop' })
     
    
    
    
    
    */

  
  });

});
