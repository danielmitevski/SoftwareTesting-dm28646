describe('MDN JavaScript Page - Navigation Links', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should navigate to References page', () => {
    cy.get('a').contains('References').click()
    cy.url().should('include', '/en-US/docs/Web')
  })

  it('should navigate to Guides page', () => {
    cy.get('a').contains('Guides').click()
    cy.url().should('include', '/en-US/docs/Learn')
  })

  it('should navigate to Plus page', () => {
    cy.get('a').contains('Plus').click()
    cy.url().should('include', '/en-US/plus')
  })

  it('should navigate to Curriculum page', () => {
    cy.get('a').contains('Curriculum').click()
    cy.url().should('include', '/en-US/curriculum/')
  })

  it('should navigate to Blog page', () => {
    cy.get('a').contains('Blog').click()
    cy.url().should('include', '/en-US/blog/')
  })

  it('should navigate to Play page', () => {
    cy.get('a').contains('Play').click()
    cy.url().should('include', '/en-US/play')
  })

  it('should navigate to AI Help page', () => {
    cy.get('a').contains('AI Help').click()
    cy.url().should('include', '/en-US/plus/ai-help')
  })
})
