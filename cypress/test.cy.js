describe('Visit my application', () => {
    it('should have correct title', () => {
        cy.visit('localhost:3000'), cy.title().should('include', 'Rain')
    })

    it
});



describe('Navbar', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    });

    it('renders the navbar', () => {
        cy.get('nav').should('exist');
    });

    it('contains links to Home, Products, and Contact', () => {
        { multiple: true }
        cy.get('nav li').eq(0).should('contain.text', 'Home');
        cy.get('nav li').eq(1).should('contain.text', 'Products');
        cy.get('nav li').eq(2).should('contain.text', 'Contact');
    });

});

describe('Purchasing items from the products page', () => {
    it('should add an item to the cart if its name contains the word "bottle"', () => {
      cy.visit('/products');
  
      cy.get('.product').each(($product) => {
        const productName = $product.find('.product-name').text();
        if (productName.toLowerCase().includes('bottle')) {
          $product.find('.add-to-cart-button').click();
        }
      });
  
      cy.get('.cart').should('contain', '1 item');
      cy.get('.cart-total').should('contain', '$19.99');
    });
  });

  describe('Removing an item from the cart', () => {
    it('should remove an item from the cart', () => {
      cy.visit('/cart');
      cy.get('.cart-item').first().find('.remove-item-button').click();
      cy.get('.cart-empty-message').should('contain', 'Your cart is empty');
    });
  });

  describe('Submitting a message from the contact form', () => {
    it('should successfully submit a message and display a confirmation message', () => {
      cy.visit('/contact');
  
      cy.get('#name').type('');
      cy.get('#email').type('');
      cy.get('#message').type('Hello, I have a question about my recent order. Can you please provide more information?');
      cy.get('#submit-button').click();
  
      cy.url().should('include', '/contact');
      cy.get('.confirmation-message').should('contain', 'Thank you for your message. We will get back to you as soon as possible.');
    });
  });