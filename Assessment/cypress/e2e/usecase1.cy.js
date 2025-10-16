describe('template spec', () => {
  it('message box task', function() {
    cy.login('leonojihs@gmail.com', 'Qwerty@123');
    cy.visitAutomation();
    cy.createOption('Task bot');
    cy.Fill_in_details();

    cy.get('input.editor-palette-search__input').type('Message box');
    //cy.get('div.taskbot-canvas-list-node__title[data-package-object-key="messagebox#messagebox"]').dblclick();

  
  });
});