import cliqueBotoes from "../../support/pages/cliqueBotoesLaterais/cliqueBotoesLaterais";

describe('Clique nos 3 botões laterais do site', () => {
    beforeEach(() => {
        cy.visit('/challenging_dom')
    });
    it('Clicar em todos os botões laterais', () => {
        cy.viewport(1440, 900)
        cliqueBotoes.clicarBotaoAzul();
        cliqueBotoes.clicarBotaoVermelho();
        cliqueBotoes.clicarBotaoVerde();
    });
});

