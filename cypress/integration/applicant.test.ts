/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

describe('Applicant screen', () => {
    it('Should successfully submit form', () => {
        cy.visit('http://localhost:3000/applicant');

        cy.get('#email').type('test@test.com').should('have.value', 'test@test.com');
        cy.get('#password').type('password1').should('have.value', 'password1');
        cy.get('#first-name').type('Name').should('have.value', 'Name');
        cy.get('#last-name').type('Surname').should('have.value', 'Surname');
        cy.get('#phone').type('+100000000').should('have.value', '+100000000');
        cy.get('input[name="agree"]').click().should('have.checked', true);
        cy.get('form .btn-primary').click();

        expect(true).to.equal(true);
    });
});
