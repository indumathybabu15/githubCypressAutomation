/// <reference types="cypress" />
export const HomePage = {
    visitGithubLoginPage:() => cy.visit('https://github.com'),
    githubLogoImage:() => cy.get('[aria-label="Homepage"]'),
    mainMenuButton:() => cy.get('button[aria-label="Toggle navigation"][type="button"]').next(),
    globalNavigation:(navHeaderName:string) => cy.contains(navHeaderName),
    navigationOptions:(navLink:string) => cy.contains('a[class^="HeaderMenu-dropdown"]',navLink),
    verifyIfGithubPageDisplays:(text:string) => cy.contains('span',text),
}