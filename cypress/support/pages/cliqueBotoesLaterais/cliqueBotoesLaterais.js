const el = require('./elements').ELEMENTS;

class Clique {
    clicarBotaoAzul(){
        cy.get(el.botaoAzul).eq(0).click()
        cy.url().should('be.equal','https://the-internet.herokuapp.com/challenging_dom')
    }
    clicarBotaoVermelho(){
        cy.get(el.botaoVermelho).click()
        cy.url().should('be.equal','https://the-internet.herokuapp.com/challenging_dom')
    }
    clicarBotaoVerde(){
        cy.get(el.botaoVerde).click()
        cy.url().should('be.equal','https://the-internet.herokuapp.com/challenging_dom')
    }
}

export default new Clique();