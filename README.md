# Cypress & TypeScript Test Automation

This repository demonstrates how to set up automated testing using **Cypress** and **TypeScript**. The tests cover basic functionality on a web page, including verifying that the GitHub logo is visible, checking the "Sign Up" button, and ensuring that navigation links redirect to the correct pages.

## Table of Contents
1. [Repository Setup](#repository-setup)
2. [Test Automation](#test-automation)
3. [Test Execution](#test-execution)
4. [CI/CD Integration](#cicd-integration)

---

## Repository Setup

1. Make sure npm installed
2. Clone the repository
3. Run "npm install"

## Test Automation
1. Folder Structure

   ![image](https://github.com/user-attachments/assets/7037dd52-eefe-4e56-8d2f-84c5b71c91f9)

## Test Execution

Cypress has two main modes: an interactive mode which has a point-and-click GUI, helpful visualizations of test runs, the ability to walk forward and backward through a previously run test, and other handy things. The other mode is a CLI mode very much like a unit testing framework like Jest or Mocha.

**Run tests in interactive mode**

Open your terminal and run npx cypress open; this will open the Cypress interactive test runner.
Select the feature file you wish to run, or click "Run all specs" to execute all test feature files.
If you want to run just a single scenario from a test feature file, add the tag "@focus" to the test scenario in the feature file.
Confirm the test url or environment variable from the file "cypress.env.json" or override it in the CLI with npx cypress open -e fixture=your_target_environment_here

**Run all tests in CLI mode**

Open terminal and run "npx cypress run"
Use "-e host, fixture" to overwrite the test url and test data location defined in the "cypress.env.json" file. If you don't specify a host and only specify a fixture file, it will use the default host, e.g. npx cypress run -e fixture=release.

**Run specific files or folders in CLI mode**

You can also pass the location of test file or folder in the CLI to run only those tests, e.g. npx cypress run -s 'cypress/integration/learner/personalization/feed.feature' or npx cypress run -s 'cypress/integration/learner/personalization/\*'

## CI/CD Integration

**Set up CI Pipeline with GitHub Actions**
To automatically run tests on each push to your repository using GitHub Actions, follow the steps below:
1. Create a Workflow Configuration File:
      Inside your repository, create a directory called .github/workflows/.
      Inside this folder, create a YAML file, e.g., ci.yml and Define Your GitHub Actions Workflow

**Running Tests Automatically**
Once the workflow is set up, GitHub Actions will automatically run your tests:
Every time code is pushed to the main branch.
On every pull request targeting the main branch.
You can monitor the workflow execution in the Actions tab of your GitHub repository, where you will see the status and logs of each test run.
