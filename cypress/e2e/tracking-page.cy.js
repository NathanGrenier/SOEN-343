describe('TrackPackage Page', () => {
    it('should redirect to package tracking page on form submit', () => {

      cy.visit('http://localhost:5173/trackPackage');
      cy.contains('Track Your Package');

      cy.get('input#packageId').type('58');
  
      // Click the Track button
      cy.get('button').contains('Track').click();
      cy.url().should('include', 'http://localhost:5173/trackPackage/58/status');
  
   
    });

    it('should display package status and tracking progress correctly', () => {

        // Visit the PackageStatus page
        cy.visit('http://localhost:5173/trackPackage/58/status');
    
        // Verify the package status is displayed correctly
        cy.get('span').contains('Status:').siblings().contains('Shipped');
    
        // Verify the estimated delivery date is displayed correctly
        cy.get('span').contains('Estimated Delivery:').siblings().contains('11/28/2024');
    
        // Verify the drop-off address is displayed correctly
        cy.get('span').contains('Delivery Address:').siblings().contains('234 green st');
    
        // Verify the tracking progress steps are displayed correctly
        cy.get('.space-y-2').within(() => {
          cy.get('.flex').eq(0).contains('Package received at origin facility');
          cy.get('.flex').eq(2).contains('Package in transit');
          cy.get('.flex').eq(4).contains('Package delivered');
        });
      });
  
  });
  