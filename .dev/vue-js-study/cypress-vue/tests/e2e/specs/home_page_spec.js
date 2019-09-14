describe('Managing todos', () => {
    it('Button click adds new todo', () =>{
        cy.visit('/jsdn/web/login/loginview.jsp?view=.view.jsdn.admin.login');
        
        cy.get("#username")
          .type('lucas.koritar@globalweb.com.br')
        
        
        cy.get("#password")
          .type('Acesso@')
        
        cy.get('.sbButtonTextLinkHome').click()
        
        cy.url()
            .should('include', '/jsdn/web/pages/view.jsp?view=.view.jsdn.administration.home')
        
        cy.get('sbButtonTextLinkHome').click()
        /*
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
            .should('deep.equal', ['Acre', 'Brasil'])*/

        

    });
});