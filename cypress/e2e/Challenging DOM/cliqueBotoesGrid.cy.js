import cliqueBotoesGrid from "../../support/pages/cliqueBotoesGrid/cliqueBotoesGrid";

describe('Clicar nos botões de "edit" e "delete"', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom')
    });
    it('Clicar nos botões de "edit" e "delete" da primeira linha', () => {
        cliqueBotoesGrid.cliquePrimeiralinha();
    });
    it('Clicar nos botões de "edit" e "delete" da segunda linha', () => {
        cliqueBotoesGrid.cliqueSegundalinha();  
    });
    it('Clicar nos botões de "edit" e "delete" da terceira linha', () => {
        cliqueBotoesGrid.cliqueTerceiralinha();
    });
    it('Clicar nos botões de "edit" e "delete" da quarta linha', () => {
        cliqueBotoesGrid.cliqueQuartalinha();
    });
    it('Clicar nos botões de "edit" e "delete" da quinta linha', () => {
        cliqueBotoesGrid.cliqueQuintalinha();
    });
    it('Clicar nos botões de "edit" e "delete" da sexta linha', () => {
        cliqueBotoesGrid.cliqueSextalinha();
    });
    it('Clicar nos botões de "edit" e "delete" da sétima linha', () => {
        cliqueBotoesGrid.cliqueSetimalinha();
    });
    it('Clicar nos botões de "edit" e "delete" da oitava linha', () => {
        cliqueBotoesGrid.cliqueOitavalinha();
    });
    it('Clicar nos botões de "edit" e "delete" da nona linha', () => {
        cliqueBotoesGrid.cliqueNonalinha();
    });
    it('Clicar nos botões de "edit" e "delete" da décima linha', () => {
        cliqueBotoesGrid.cliqueDecimalinha();
    });
});