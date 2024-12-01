describe('PaymentForm Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/payment'); // Assuming this is the URL where PaymentForm is rendered
    });
  
    it('renders the payment form with credit card as default', () => {
      // Check if the form elements are visible
      cy.get('h1').should('contain', 'Payment Checkout');

      cy.get('input').should('have.length', 8); 
      cy.get('button').contains('Submit Payment'); 
      cy.get('button').contains('Cancel');
      cy.get('select').should('exist');

    });
  
    it('allows switching between Credit Card and PayPal payment methods', () => {
      // Switch to PayPal and check if PayPal image is visible
      cy.get('select').select('paypal');
      cy.get('img').should('have.attr', 'src')
      // Switch back to Credit Card and check if the credit card input fields are visible
      cy.get('select').select('creditCard');
      cy.get('input[placeholder="XXXX XXXX XXXX XXXX"]').should('be.visible');
      cy.get('input[placeholder="MM/YY"]').should('be.visible');
    });
  
    // it('validates email input and submits successfully with valid data', () => {
    //     cy.intercept('POST', '/api/send-delivery-payment/*', {
    //         statusCode: 200,
    //         body: { message: 'Payment processed successfully' }
    //       }).as('sendPayment');

    //   cy.get('input[placeholder="name@email.com"]').type('test@example.com');
    //   cy.get('input[placeholder="XXXX XXXX XXXX XXXX"]').type('4111 1111 1111 1111');
    //   cy.get('input[placeholder="MM/YY"]').type('12/25');
    //   cy.get('input[placeholder="CVV"]').type('123');
    //   cy.get('input[placeholder="Enter name"]').type('John Doe');
    //   cy.get('input[placeholder="Enter billing address"]').type('455 de Maisonneuve Blvd W, Montreal, Quebec H3G 1M8 Canada');
    //   cy.get('button.bg-custom-blueishGray').first().click();

    //   cy.wait('@sendPayment');
  
    //   // Assuming that after a successful submission, a success message is shown
    //   cy.get('h1').should('contain', '✔️ Success!');
    //   cy.get('p').should('contain', 'Your payment has been successfully processed.');
    // });
  
    // it('shows an error message when payment fails', () => {
    //     cy.intercept('POST', 'http://localhost:3000/api/send-delivery-payment/*', {
    //         statusCode: 500
    //       }).as('sendPayment');
      
    //       cy.get('input[placeholder="name@email.com"]').type('test@example.com');
    //       cy.get('input[placeholder="XXXX XXXX XXXX XXXX"]').type('4111 1111 1111 1111');
    //       cy.get('input[placeholder="MM/YY"]').type('12/25');
    //       cy.get('input[placeholder="CVV"]').type('123');
    //       cy.get('input[placeholder="Enter name"]').type('John Doe');
    //       cy.get('input[placeholder="Enter billing address"]').type('455 de Maisonneuve Blvd W, Montreal, Quebec H3G 1M8 Canada');
    //       cy.get('button.bg-custom-blueishGray').first().click();
  
    //   // Simulate failure by intercepting the API call
    //   cy.wait('@sendPayment')
  
    //   cy.get('.error-message').should('contain', 'Payment failed');
    // });

  });
  