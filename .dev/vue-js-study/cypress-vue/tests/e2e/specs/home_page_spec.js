describe('The Home Page', function(){
    it('sucessfuly loads', function(){
        cy.visit('/');
        cy.get('h1').should('contain', 'Conhecendo o Cypress com Vuejs!');
        cy.get('input.hello-world').type('Por hoje é isso pessoal!');
        cy.get('button').click();
    });
});