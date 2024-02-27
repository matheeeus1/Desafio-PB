/// <reference types="cypress"/>

import cliqueBotoesGrid from "../../support/pages/cliqueBotoesGrid/cliqueBotoesGrid";

describe('Clique nos botões de "edit" e "delete"', () => {
    beforeEach(() => {
        cy.visit('/challenging_dom')
    });
    it('Clicar em todos os botões de "edit" e "delete" do grid', () => {
        cy.viewport(1440, 900)
        cliqueBotoesGrid.cliquePrimeiralinha();
        cliqueBotoesGrid.cliqueSegundalinha();
        cliqueBotoesGrid.cliqueTerceiralinha();
        cliqueBotoesGrid.cliqueQuartalinha();
        cliqueBotoesGrid.cliqueQuintalinha(); 
        cliqueBotoesGrid.cliqueSextalinha();
        cliqueBotoesGrid.cliqueSetimalinha();
        cliqueBotoesGrid.cliqueOitavalinha();
        cliqueBotoesGrid.cliqueNonalinha();
        cliqueBotoesGrid.cliqueDecimalinha();
    });
});