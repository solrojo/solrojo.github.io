import statement from '@/constants/statement'

describe('Statement', () => {
  if (!statement.enabled) return;

  beforeEach(() => {
    cy.visit('/')
  })

  it('contain a text', () => {
    cy.get('[data-test-id="statement-text"]')
      .should('be.visible')
  })
})

export {}
