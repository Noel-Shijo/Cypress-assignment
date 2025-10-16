describe('template spec', () => {
  it('Learning Instance API flow', function() {
    cy.login('leonojihs@gmail.com', 'Qwerty@123');

    cy.get('button[title="AI"]', { timeout: 10000 }).should('be.visible').click();
    cy.contains("Document Automation").should('be.visible').click();
    //cy.contains("Create Learning Instance",{ timeout: 10000 }).should('be.visible').click();
    //cy.get('button[name=create-button][aria-label$="Create Learning Instance"]',{ timeout: 10000 }).click();
    //cy.get(.).should('be.visible').click();
  

  
  });
});
