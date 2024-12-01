describe('Delivery Page', () => {
    beforeEach(() => {
      // Visit the Delivery page
      cy.visit('http://localhost:5173/request_delivery');
    });
  
    it('should display the form and all its fields', () => {
      // Check that the input fields exist
      cy.get('input').should('have.length', 7); 
      cy.get('button').contains('Request');
      cy.get('select').should('exist');

    });
  
    it('should display an error message when required fields are missing', () => {
      // Trigger the request without filling any fields
      cy.get('button.bg-custom-blueishGray').click();
  
      // Check for the error message
      cy.contains('Please fill in all the information.').should('exist');
    });
  
    it('should calculate shipping cost and display it when all fields are filled', () => {
      // Fill out the form fields
      cy.get('input[placeholder="Enter first name"]').type('John');
      cy.get('input[placeholder="Enter last name"]').type('Doe');
      cy.get('input[placeholder="Enter email address"]').type('john.doe@example.com');
      cy.get('input[placeholder="Enter departure address"]').type('123 Pickup St');
      cy.get('input[placeholder="Enter delivery address"]').type('456 Delivery Ave');
      cy.get('input[type="number"]').type('2');
      cy.get('input[type="checkbox"]').check();
      cy.get('select').first().select('inside');

  
      // Click the button to trigger the shipping cost calculation
      cy.get('button.bg-custom-blueishGray').click();
  
      // Check if the shipping cost is displayed
      cy.contains('Estimated Shipping Cost:').should('exist');
    });
  
    it('should call the backend and redirect on successful form submission', () => {
      // Intercept the API call and stub the response
      cy.intercept('POST', '/api/packages', {
        statusCode: 200,
        body: { message: 'Package successfully inserted', id: 109 },
      }).as('createPackage');

      // Fill out the form
      cy.get('input[placeholder="Enter first name"]').type('John');
      cy.get('input[placeholder="Enter last name"]').type('Doe');
      cy.get('input[placeholder="Enter email address"]').type('john.doe@example.com');
      cy.get('input[placeholder="Enter departure address"]').type('123 Pickup St');
      cy.get('input[placeholder="Enter delivery address"]').type('456 Delivery Ave');
      cy.get('input[type="number"]').type('2');
      cy.get('input[type="checkbox"]').check();
      cy.get('select').first().select('inside');
  
      // Click the button to submit
      cy.get('button.bg-custom-blueishGray').click();
  
      // Wait for the API call and check if the correct request was made
      cy.wait('@createPackage');
  
      // Check that the user was redirected to the payment page
      cy.url().should('include', 'http://localhost:5173/payment');
    });
  
    it('should handle API failure correctly and show error message', () => {
      // Intercept the API call and simulate failure
      cy.intercept('POST', '/api/packages', {
        statusCode: 500,
        body: { error: 'Failed to create package' },
      }).as('createPackageFailure');
  
      // Fill out the form with valid data
      cy.get('input[placeholder="Enter first name"]').type('John');
      cy.get('input[placeholder="Enter last name"]').type('Doe');
      cy.get('input[placeholder="Enter email address"]').type('john.doe@example.com');
      cy.get('input[placeholder="Enter departure address"]').type('123 Pickup St');
      cy.get('input[placeholder="Enter delivery address"]').type('456 Delivery Ave');
      cy.get('input[type="number"]').type('2');
      cy.get('input[type="checkbox"]').check();
      cy.get('select').first().select('inside');
  
      // Click the button to submit
      cy.get('button.bg-custom-blueishGray').click();
  
      // Wait for the API call and check the error message is shown
      cy.wait('@createPackageFailure');
      cy.contains('Failed to create package in the database.').should('exist');
    });
  });
  