import { HomePage } from "../../support/pages/homePage"

describe('Github Page',() => {
    context('Home Page',() => {
        it('Verify whether Github Logo is visible',() => {
            HomePage.visitGithubLoginPage()
            HomePage.githubLogoImage().should('be.visible')
        })

        it('Verify whether Navigation links are redirected to the correct pages',() => {
            HomePage.visitGithubLoginPage()
            HomePage.mainMenuButton().click()
            HomePage.globalNavigation('Pricing').click({force:true})
            cy.url().should('include','/pricing')

            HomePage.mainMenuButton().click()
            HomePage.globalNavigation('Product').click({force:true})
            HomePage.navigationOptions('All features').click()
            cy.url().should('include','/features')

            HomePage.mainMenuButton().click()
            HomePage.globalNavigation('Solutions').click({force:true})
            HomePage.globalNavigation('View all solutions').click()
            cy.url().should('include','/solutions') 
        })

        it('verify whether Sign Up is functional',() => {
            HomePage.visitGithubLoginPage()
            HomePage.mainMenuButton().click()
            HomePage.globalNavigation('Sign up').click({force:true})
            cy.url().should('include','/signup')
            HomePage.verifyIfGithubPageDisplays('Welcome to GitHub!').should('be.visible')
        })
    })
})