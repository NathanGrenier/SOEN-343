describe('Reviews Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/reviews'); // Replace with the correct route
    });
  
    it('should display the review form with rating stars', () => {
      // Check that the Review form is visible
      cy.get('h2').should('contain', 'Service Review');
      cy.get('textarea').should('have.length', 3); 
    });
  
    it('should show the modal after submitting the review', () => {
      // Simulate filling out the review form
      cy.get('textarea').first().type('Great service!');
  
      // Select and click the first rating star (using eq(0) to target the first one)
      cy.get('label').find('svg').first().click();
  
      // Submit the form
      cy.get('button.bg-custom-blueishGray').click();
  
      // Check that the modal appears with the thank you message
      cy.get('.fixed').should('be.visible');
      cy.get('.text-2xl').should('contain', 'Thank you for your review!');
   
      // Wait for the navigation to happen after 3 seconds (as per setTimeout in code)
      cy.wait(4000);
  
      // Check if the page has navigated to the homepage
      cy.location('href', { timeout: 5000 }).should('eq','http://localhost:5173/');

    });
  });
  