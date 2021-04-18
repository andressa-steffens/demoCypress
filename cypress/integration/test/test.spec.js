describe('test', () => {
    it('Visit the page and search', () => {
        
        // Open https://demo.opencart.com/ url
        cy.visit('https://demo.opencart.com/');

        // Get search bar and type into it
        cy.get('.input-group').type('apple');
        
        // Click the magnifier glass to search
        cy.get('.input-group-btn').click();

        cy.get('#input-search').should('be.visible');
        cy.get('#button-search').should('be.visible');


    });

    it('Register a user', () => {

        // Open https://demo.opencart.com/ url
        cy.visit('https://demo.opencart.com/');

        //Click My Account > Register+
        cy.get('[title="My Account"]').click();

        cy.get('a[href="https://demo.opencart.com/index.php?route=account/register"]').click();

        //Enter new user info
        cy.get('#input-firstname').type('Andressa');
        cy.get('#input-lastname').type('Schaff Steffens');
        cy.get('#input-email').type('andstef@hotmail.com');
        cy.get('#input-telephone').type('123456789');
        cy.get('#input-password').type('c4bola');
        cy.get('#input-confirm').type('c4bola');
        cy.get('[name="newsletter"]').eq(1).click();
        cy.get('[name="agree"]').click();

        //Assert user data
        cy.get('#input-firstname').should('have.value', 'Andressa');
        cy.get('#input-lastname').should('have.value', 'Schaff Steffens');        

        cy.get('[type="submit"]').click();

        cy.contains('#content', 'Your Account Has Been Created!').should('be.visible');

    })


})