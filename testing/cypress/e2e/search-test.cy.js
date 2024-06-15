describe('MDN JavaScript Page - Search and Navigate', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should search for "body" and navigate to the first result', () => {
    cy.get('input#top-nav-search-input').type('body{enter}')
    cy.get('.search-results a').first().click()
    cy.url().should('include', '/en-US/docs/Web/HTML/Element/body')
    cy.scrollTo('bottom')
  })
})
