describe('MDN JavaScript Page', () => {
  it('should load the page and have the correct title', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
    cy.title().should('include', 'JavaScript')
  })
})


describe('MDN JavaScript Page', () => {
  it('should have the main header', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})

describe('MDN JavaScript Page', () => {
  it('should have an Introduction section', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
    cy.get('h2').contains('Introduction').should('exist')
  })
})


describe('MDN JavaScript Page', () => {
  it('should have a functional search bar', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
    cy.get('input[name="q"]').type('Array{enter}')
    cy.url().should('include', 'Array')
    cy.get('h1').should('contain.text', 'Array')
  })
})


describe('MDN JavaScript Page', () => {
  it('should have a Learn more section', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
    cy.contains('Learn more about JavaScript').should('exist')
  })
})


describe('MDN JavaScript Page', () => {
  it('should have a References link in the navigation bar', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
    cy.get('nav').contains('References').should('exist')
  })
})
