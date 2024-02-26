const el = require('./elements').ELEMENTS;

class Clique {
    clicarBotaoAzul(){
        cy.get(el.botaoAzul).eq(0).click()
        cy.url().should('include','/challenging_dom')
    }
    clicarBotaoVermelho(){
        cy.get(el.botaoVermelho).click()
        cy.url().should('include','/challenging_dom')
    }
    clicarBotaoVerde(){
        cy.get(el.botaoVerde).click()
        cy.url().should('include','/challenging_dom')
    }
}

export default new Clique();