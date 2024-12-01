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

  });
  