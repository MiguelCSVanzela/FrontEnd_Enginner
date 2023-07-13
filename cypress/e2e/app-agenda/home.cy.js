/// <reference types="cypress" />

describe('Testes para o app agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher os campos do contato e adiciona-lo a lista', () => {
        cy.get('input[type="text"]').type('Miguel CS Vanzela')
        cy.get('input[type="email"]').type('miguelcsvanzela@gmail.com')
        cy.get('input[type="tel"]').type('4398844066')
        cy.get('.adicionar').click()
        
        cy.get('.sc-beqWaB').should('have.length', 4)
        cy.screenshot('contato-incluso')
    })
    
    it('Deve Remover um contato', () => {
        cy.get('.delete').first().click()
        cy.get('.sc-beqWaB').should('have.length', 3)
        cy.screenshot('primeiro-contato-removido')
    })
    
    it('Deve editar um contato e salvar seus valores', () => {
        cy.get('.edit').last().click()
        
        cy.get('input[type="text"]').clear().type('Souzera')
        cy.get('input[type="email"]').clear().type('giansouzera@gmail.com')
        cy.get('input[type="tel"]').clear().type('4397744055')
        cy.get('.alterar').click()
        
        cy.contains('Souzera').should('be.visible')
        cy.screenshot('contato-editado')
    })
    
    it('Deve alterar o contato e cancelar', () => {
        cy.get('.edit').first().click()
        
        cy.get('input[type="text"]').clear().type('Miguelito')
        cy.get('input[type="email"]').clear().type('miguelao@gmail.com')
        cy.get('input[type="tel"]').clear().type('4397744055')
        
        cy.get('.cancelar').click()
        
        cy.contains('Miguelito').should('not.exist')
    })
    
})