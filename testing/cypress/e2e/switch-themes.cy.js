describe('MDN JavaScript Page - Theme Switching', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should switch to Light theme', () => {
    cy.get('button.theme-switcher-menu').click()
    cy.contains('Light').click()
    cy.get('body').should('have.class', 'light')
  })

  it('should switch to Dark theme', () => {
    cy.get('button.theme-switcher-menu').click()
    cy.contains('Dark').click()
    cy.get('body').should('have.class', 'dark')
  })

})
