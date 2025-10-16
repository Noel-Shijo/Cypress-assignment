describe('template spec', () => {
  
  beforeEach(() => {
    cy.fixture('loginUser').as('userData'); // Load fixtures for user name and password
  });

  it('message box task', function() {
    cy.viewport(1280, 800);
    cy.get('@userData').then((user) => {
      cy.login(user.username,user.password);
    });
    cy.visitAutomation(); // this was used in all 3 use cases, so I created a function in commands.js
    cy.createOption('Task bot'); //same for this, there are 3 options under create, so I passed the value as a parameter
    cy.Fill_in_details(); //This is a function that fills in a  random string for the test name. 

    cy.get('input.editor-palette-search__input').type('Message box');
    cy.get('span[data-text="Message box"]').click(); // This is for the first Message box
    cy.get('span[data-text="Message box"]').dblclick(); // This is for the Message box text under the dropdown options

    cy.get('div[name="title"]')
  .should('have.attr', 'contenteditable', 'true')
  .should('not.be.empty'); //Simple assertion to not have the title empty 

  cy.get('div[name="content"]', { timeout: 10000 })
  .should('be.visible')
  .and('have.attr', 'contenteditable', 'true')
  .clear()
  .type("This field is required!");//asserted that the description field be visible and then type it is required 

  cy.contains('button', 'Save').should('exist').click();
  cy.contains('button', 'Close').should('be.enabled').click(); // save and close the task 






  
  });
});
