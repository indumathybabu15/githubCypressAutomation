# githubCypressAutomation
Automation of Github page using Cypress framework
This repository demonstrates how to set up automated testing using Cypress and TypeScript for testing basic functionality on a web page. It includes tests for the visibility of the GitHub logo, checking the functionality of the "Sign up" button, and verifying that navigation links (like "Explore" and "Pricing") redirect to the correct pages.

Table of Contents
Repository Setup
Basic Test Automation
Test Execution
Running Tests
CI/CD Integration
Repository Setup
1. Create a New GitHub Repository
Sign in to GitHub and create a new repository.
Clone the repository to your local machine.
2. Install Cypress and TypeScript
Run the following commands to initialize your project and install Cypress with TypeScript:

bash
Copy code
npm init -y
npm install cypress typescript ts-node @types/node @types/cypress --save-dev
3. Set Up TypeScript for Cypress
Create a tsconfig.json file to configure TypeScript for Cypress:

json
Copy code
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6", "dom"],
    "types": ["cypress"]
  },
  "include": ["**/*.ts"]
}
4. Add Cypress and TypeScript Configuration
Inside your cypress folder, create a support/commands.ts file and add any global custom Cypress commands you may need. In cypress/plugins/index.ts, initialize TypeScript support.

Basic Test Automation
This repository includes basic tests that verify the following:

1. Verify GitHub Logo Visibility
A test to check that the GitHub logo is visible on the page:

typescript
Copy code
describe('GitHub Logo Test', () => {
  it('should verify that the GitHub logo is visible', () => {
    cy.visit('https://github.com');
    cy.get('img[alt="GitHub"]').should('be.visible');
  });
});
2. Test "Sign Up" Button Functionality
A test to verify that the "Sign up" button leads to the appropriate sign-up page:

typescript
Copy code
describe('Sign Up Button Test', () => {
  it('should verify the functionality of the "Sign up" button', () => {
    cy.visit('https://github.com');
    cy.get('a[href="/signup"]').click();
    cy.url().should('include', '/signup');
  });
});
3. Test Navigation Links
Tests that ensure navigation links like "Explore" and "Pricing" redirect to the correct pages:

typescript
Copy code
describe('Navigation Links Test', () => {
  it('should navigate to the Explore page', () => {
    cy.visit('https://github.com');
    cy.get('a[href="/explore"]').click();
    cy.url().should('include', '/explore');
  });

  it('should navigate to the Pricing page', () => {
    cy.visit('https://github.com');
    cy.get('a[href="/pricing"]').click();
    cy.url().should('include', '/pricing');
  });
});
Test Execution
Add a Script in package.json
In your package.json file, add the following script to run Cypress headlessly:

json
Copy code
{
  "scripts": {
    "test": "cypress run"
  }
}
Running Tests Headlessly
To run the tests headlessly with output suitable for CI/CD pipelines, simply run the following command:

bash
Copy code
npm test
This will execute the Cypress tests in headless mode, which is useful for automation in CI/CD pipelines.

CI/CD Integration
You can integrate this test suite into any CI/CD pipeline. For GitHub Actions, you can add a workflow file like the one below to automatically run tests on each push to the repository.

Example GitHub Actions Workflow (.github/workflows/cypress.yml):
yaml
Copy code
name: Run Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npm test
CI/CD Pipeline for Other Platforms
For other CI/CD platforms such as CircleCI or Jenkins, similar configurations can be made by setting up Node.js, installing the project dependencies, and running Cypress headlessly with npm test.

Conclusion
This repository demonstrates the setup of Cypress with TypeScript for automated testing of key functionality on a website, such as verifying the GitHub logo, "Sign Up" button, and navigation links. With these tests, and the provided script, tests can be run locally or integrated into any CI/CD pipeline for continuous testing.
