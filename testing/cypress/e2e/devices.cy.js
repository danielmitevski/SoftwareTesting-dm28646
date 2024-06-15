describe('MDN JavaScript Page - Viewports', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should display correctly on iPhone 6', () => {
    cy.viewport('iphone-6')
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})

describe('MDN JavaScript Page - Viewports', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should display correctly on iPad', () => {
    cy.viewport('ipad-2')
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})


describe('MDN JavaScript Page - Viewports', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should display correctly on MacBook 15', () => {
    cy.viewport('macbook-15')
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})


describe('MDN JavaScript Page - Viewports', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should display correctly on Samsung Galaxy S5', () => {
    cy.viewport('samsung-s10')
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})


describe('MDN JavaScript Page - Viewports', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should display correctly on 1024x768 resolution', () => {
    cy.viewport(1024, 768)
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})


describe('MDN JavaScript Page - Viewports', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should display correctly on iPhone X', () => {
    cy.viewport('iphone-x')
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})


describe('MDN JavaScript Page - Viewports', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should display correctly on iPad Mini', () => {
    cy.viewport('ipad-mini')
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})


describe('MDN JavaScript Page - Viewports', () => {
  beforeEach(() => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
  })

  it('should display correctly on iMac 27', () => {
    cy.viewport('macbook-15')
    cy.get('h1').should('contain.text', 'JavaScript')
  })
})
