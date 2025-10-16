import '@4tw/cypress-drag-drop'

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://community.cloud.automationanywhere.digital/#/login?next=/index');

  // Wait for username input to be visible
  cy.get('input[name="username"]', { timeout: 10000 })
    .should('be.visible')
    .type(username);

  cy.get('input[name="password"]', { timeout: 10000 })
    .should('be.visible')
    .type(password, { log: false }); // hides password from Cypress logs

  // Click Log in button
  cy.get('button[name="submitLogin"]', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click();
});


Cypress.Commands.add('visitAutomation', () => {
  // Wait for the Automation menu option to be visible
  cy.get('a[title="Automation"]', { timeout: 15000 })
    .should('be.visible')
    .click();
});

// cypress/support/commands.js

Cypress.Commands.add('createOption', (optionName) => {
  // Click the main "Create" button
  cy.get('button[name="createOptions"]', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Determine which submenu option to click
  switch (optionName.toLowerCase()) {
    case 'task bot':
      cy.get('button[name="createTaskbot"]', { timeout: 10000 })
        .should('be.visible')
        .click();
      break;

    case 'process':
      cy.get('button[name="createProcess"]', { timeout: 10000 })
        .should('be.visible')
        .click();
      break;

    case 'form':
      cy.get('button[name="create-attended-form"]', { timeout: 10000 })
        .should('be.visible')
        .click();
      break;
  }

  // Optional: verify the correct page or modal opened
  cy.wait(2000);
});

// cypress/support/commands.js

Cypress.Commands.add('Fill_in_details', (description = 'TEST_DESCRIPTION') => {
  // Generate a unique name for the automation
  const automationName = `auto_${Math.random().toString(36).substring(2, 15)}`;

  // Fill out the form fields
  cy.get('input[name="name"]', { timeout: 10000 })
    .should('be.visible')
    .click()
    .clear()
    .type(automationName);

  cy.get('input[name="description"]', { timeout: 10000 })
    .should('be.visible')
    .click()
    .clear()
    .type(description);

  // Click submit
  cy.get('button[name="submit"]', { timeout: 10000 })
    .should('be.visible')
    .click();

    cy.wait(2000);
});
