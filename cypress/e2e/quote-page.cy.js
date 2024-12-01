describe('Quotation Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/quotation'); // Visit the Quotation page
    });
  
    it('should render the page elements correctly', () => {
      // Check that the required elements are present on the page
      cy.get('h1').contains('Our Shipping Rates');
      cy.get('h2').contains('Shipping Quotation');
      cy.get('button').contains('Calculate Cost');
      cy.get('input').should('have.length', 4); 
    });
  
    it('should calculate the shipping cost correctly', () => {
      // Fill in the form fields with valid data
      cy.get('input[placeholder="Enter departure address"]').type('123 Main St');
      cy.get('input[placeholder="Enter delivery address"]').type('456 Elm St');
      cy.get('select').first().select('outside'); // Select "Outside Canada"
      cy.get('input[placeholder="Weight"]').type('5'); // Enter weight as 5 kg
      cy.get('select').eq(1).select('Sea Shipping'); // Select "Sea Shipping"
      
      // Click the Calculate Cost button
      cy.get('button').contains('Calculate Cost').click();
      
      // Check if the cost is calculated and displayed
      cy.get('.bg-green-100').should('be.visible').and('contain.text', 'Estimated Shipping Cost');
    });
  
    it('should show an error if the form is not completed', () => {
      // Click the Calculate Cost button without filling the form
      cy.get('button').contains('Calculate Cost').click();
      
      // Check if the error message is shown
      cy.get('.text-red-600').should('be.visible').and('contain.text', 'Please fill in all the information.');
    });
  
  });
  