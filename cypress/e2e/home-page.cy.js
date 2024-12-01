describe('Home Page E2E Test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should load the home page and display main content', () => {
    cy.url().should('eq', 'http://localhost:5173/'); 

    cy.contains('SwiftSend').should('be.visible');
    cy.contains('On Time, Every Time').should('be.visible');
    cy.contains('Experience the fastest most reliable delivery service worldwide').should('be.visible');
  });

  it('should display the "Ship Now" and "Track Now" buttons', () => {
    cy.get('button').contains('Ship Now').should('be.visible').click();
    cy.url().should('include', 'http://localhost:5173/quotation'); 

    cy.visit('http://localhost:5173/'); 

    cy.get('button').contains('Track Now').should('be.visible').click();
    cy.url().should('include', 'http://localhost:5173/trackPackage');
  });

  it('should display the "Get Started" button and navigate correctly', () => {
    // Check if "Get Started" button is visible and clickable
    cy.get('button').contains('Get Started').should('be.visible').click();
    cy.url().should('include', 'http://localhost:5173/request_delivery');
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
