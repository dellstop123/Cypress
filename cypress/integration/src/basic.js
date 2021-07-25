///<require='cypress'>



describe('LinkedIn Network', () => {



it('Network Connection', () => {

    // cy.visit('https://www.google.com')
    
    cy.visit(`${Cypress.env('baseUrl')}`)
    
    cy.title().should('eq','LinkedIn: Log In or Sign Up')
    // cy.wait(5000)
})
it('Login', () =>{
    cy.log()
    cy.get('input[type=text]').type('abc@gmail.com')
    // cy.wait(5000)
    cy.get('input[type=password]').type('abcd')  
    // cy.wait(5000) 
    cy.get('button[type=submit]').click()
    // cy.intercept({
    //     method: 'POST',
    //     url: '/homepage-guest/api/ingraphs/gauge?csrfToken=null',
    //   }).as('apiCheck')
    cy.wait(40000)
    
})

})