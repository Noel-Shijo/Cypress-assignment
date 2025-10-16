# Cypress-assignment

Download the file,

Install Cypress with: 
npm install cypress --save-dev

Install the Cypress drag-and-drop plugin:
npm install --save-dev @4tw/cypress-drag-drop

Open the file -> Terminal -> Run npx cypress open -> It will open a window -> Select E2E testing -> Chrome -> Start E2E testing -> Click on the use case spec file for each Use case test. 

*For some weird reason (I suspect there is a flag when you click the automation menu from the sidebar, the same test fails because the elements are different. I could make the flag an environment variable as a before each for the test, since I do not have the flag, you can just rerun the test 2/3 times, until you are bucketed to the version that the automation is written in. 
**I was not able to complete use cases 2 and 3, mainly because I kept running into issues finding non-flaky locators for the elements. I have, however, implemented modularity and abstraction in the automation POM BDD. The password is saved in the userLogin.json file, and all common steps are behind a function in the command.js file.
