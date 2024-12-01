describe('Home Page E2E Test', () => {

  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('http://localhost:5173/');
  });

  it('should load the home page and display main content', () => {
    // Verify that the correct URL is loaded
    cy.url().should('eq', 'http://localhost:5173/'); // Adjust URL if needed

    // Check for the main title text
    cy.contains('SwiftSend').should('be.visible');
    cy.contains('On Time, Every Time').should('be.visible');
    cy.contains('Experience the fastest most reliable delivery service worldwide').should('be.visible');
  });

  it('should display the "Ship Now" and "Track Now" buttons', () => {
    // Check if the buttons are visible and clickable
    cy.get('button').contains('Ship Now').should('be.visible').click();
    cy.url().should('include', 'http://localhost:5173/quotation'); // Should navigate to the Quotation page

    cy.visit('http://localhost:5173/'); // Navigate back to the home page

    cy.get('button').contains('Track Now').should('be.visible').click();
    cy.url().should('include', 'http://localhost:5173/trackPackage'); // Should navigate to the TrackPackage page
  });

  it('should display the "Get Started" button and navigate correctly', () => {
    // Check if "Get Started" button is visible and clickable
    cy.get('button').contains('Get Started').should('be.visible').click();
    cy.url().should('include', 'http://localhost:5173/request_delivery'); // Should navigate to the Request Delivery page
  });

  it('should display the "Need Reliable Delivery" section', () => {
    // Check for the "Need Reliable Delivery" text
    cy.contains('Need Reliable Delivery for Your Everyday Needs?').should('be.visible');
    cy.contains('Wherever you are, SwiftSend is here to ensure your packages reach their destination quickly and securely, every time.')
      .should('be.visible');
  });

  it('should navigate correctly for different links in the home page', () => {
    // Test links for correct navigation
    cy.get('a').contains('Ship Now').click();
    cy.url().should('include', '/quotation');
    cy.go('back');

    cy.get('a').contains('Track Now').click();
    cy.url().should('include', '/trackPackage');
    cy.go('back');

    cy.get('a').contains('Get Started').click();
    cy.url().should('include', '/request_delivery');
  });
});
