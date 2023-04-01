import statement from '@/constants/statement'

describe('Statement', () => {
  if (!statement.enabled) return;

  beforeEach(() => {
    cy.visit('/')

    if (statement.enabled) {
      cy.get('[data-test-id="banner"]')
        .should('be.visible')
        .find('[data-test-id="open-modal"]')
        .should('be.visible')
        .click()
    }
  })

  const statementData = statement.en

  it('contain a text', () => {
    cy.get('[data-test-id="statement-text"]')
      .should('be.visible')
      .should('have.text', statementData.title)
  })

  it('contain an action', () => {
    cy.get('[data-test-id="statement-action"]')
      .should('be.visible')
      .contains(statementData.action.text)
      .should('have.attr', 'href')
      .should('equal', statementData.action.link)
  })

  it('contain an image', () => {
    cy.get('[data-test-id="statement-image"]')
      .should('be.visible')
      .then(el => {
        expect(el.attr('class')).include(statementData.imageClass)
        expect(el.css('background-image')).not.be.empty
      })
  })
})

export {}
