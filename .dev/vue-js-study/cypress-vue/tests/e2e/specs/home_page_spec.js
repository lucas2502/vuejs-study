describe('Managing todos', () => {
    it('Button click adds new todo', () =>{
        cy.visit('https://rsl-dev.vivoplataformadigital.com.br/cms/pt/family/microsoft-power-bi');
        
        cy.contains('Consulte-nos').click()
        cy.contains('Solicite um contato').click()
        
        cy.get("#input-name")
          .type('Lucas')
          
        cy.get("#input-lastname")
          .type('França')

        cy.get("#input-enterprise")
          .type('Global Web')

        cy.get('[type="radio"]').first().check()  

        cy.get("#input-cpf")
          .type('00000000000')

        cy.get("#input-city")
          .type('Brasilía')
        
        cy.get('select')
            .select(['Acre', 'Brasil']).invoke('val')
            .should('deep.equal', ['Acre', 'Brasil'])

        

    });
});