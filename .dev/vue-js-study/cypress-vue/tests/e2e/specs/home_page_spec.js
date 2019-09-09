describe('Managing todos', () => {
    it('Button click adds new todo', () =>{
        cy.visit('/');
        cy.get('#new-task').type('Hello');
        cy.get('button').click();
        cy.get('.todo').contains('Hello');
    });

    it('Clicking a todo crosses it out', () => {
        cy.get('.todo').contains('Hello').click()
        cy.get('.todo').contains('Hello').should('have.class', 'completed');
    });

    it("Cross button deletes a todo", () => {
        cy.get('.delete-todo').click();
        cy.get('.todo').should('not.contain', 'Hello');
    })
});