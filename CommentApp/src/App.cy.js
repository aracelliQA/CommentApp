import App from './App.vue'

describe('<App />', () => {
    it('should load App', () => {
      cy.mount(App)
      cy.get('[data-cy=titulo]').should('be.visible')
    })

    it('should type name and comment', () => {
        cy.mount(App)
        cy.get('[data-cy=nome]').type('Aracelli')
        cy.get('[data-cy=comentario]').type('Primeiro Comentário')
      })

    it('should add a comment', () => {
        cy.mount(App)
        cy.get('[data-cy=nome]').type('Aracelli')
        cy.get('[data-cy=comentario]').type('Primeiro Comentário')
        cy.get('[data-cy=comentar]').click()
        cy.get('[data-cy=lista]').should('be.visible')
    })

    it('should delete a comment', () => {
        cy.mount(App)
        cy.get('[data-cy=nome]').type('Aracelli')
        cy.get('[data-cy=comentario]').type('Primeiro Comentário')
        cy.get('[data-cy=comentar]').click()
        cy.get('[data-cy=lista]').should('be.visible')
        cy.get('[data-cy=excluir]').click()
        cy.get('[data-cy=lista]').should('not.be.visible')
      })
     
})