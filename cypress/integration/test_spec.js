describe('A dummy test', () => {
    it('Does not do much', () => {
        expect(true).to.equal(true);
    });
});

describe('Buttons behaviour', () => {
    it('should erase the div#toBeErased when btnEraseDiv clicked', () => {
        cy.visit('./src/index.html');
        cy.get('#btnEraseDiv').click();
        cy.get('#toBeErased').should('not.exist');
    });
});
