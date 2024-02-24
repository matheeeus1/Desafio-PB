import cliqueBotoes from "../../support/pages/cliqueBotoesLaterais/cliqueBotoesLaterais";

describe('Clicar nos 3 botões laterais do site', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom')
    });
    it('Clicar no primeiro botão (azul)', () => {
        cliqueBotoes.clicarBotaoAzul();
    });
    it('Clicar no segundo botão (vermelho)', () => {
        cliqueBotoes.clicarBotaoVermelho();
    });
    it('Clicar no terceiro botão (verde)', () => {
        cliqueBotoes.clicarBotaoVerde();
    });
});

