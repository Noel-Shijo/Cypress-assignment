describe('template spec', () => {
  it('Form with upload flow', function() {
    cy.viewport(1280, 800);
    cy.login('leonojihs@gmail.com', 'Qwerty@123');
    cy.visitAutomation();
    cy.createOption('Form');
    cy.Fill_in_details();
    
    // Locate and click the Text Box button using multiple attributes
    cy.get('button[name="item-button"][data-indent="1"]').click();

  
  });
});