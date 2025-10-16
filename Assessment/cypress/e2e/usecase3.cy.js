describe('template spec', () => {
  it('Learning Instance API flow', function() {
    cy.login('leonojihs@gmail.com', 'Qwerty@123');

    cy.get('button[title="AI"]', { timeout: 10000 }).should('be.visible').click();
    cy.contains("Document Automation").should('be.visible').click();
    //cy.contains("Create Learning Instance",{ timeout: 10000 }).should('be.visible').click();
    //cy.get('button[name=create-button][aria-label$="Create Learning Instance"]',{ timeout: 10000 }).click();
    //cy.get('button[name="create-button"]',{timeout:10000}).click();

    /*const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 16); // e.g., "2025-10-16T15:30"

    cy.get('input[name="name"]', { timeout: 10000 })
    .should('be.visible')
    .type(formattedDateTime);

    cy.get('input[name="description"]', { timeout: 10000 })
    .should('be.visible')
    .type("testdescription");

    cy.contains('button', 'Next').click();
    cy.contains('button', 'Create').click();*/

  

  
  });
});

