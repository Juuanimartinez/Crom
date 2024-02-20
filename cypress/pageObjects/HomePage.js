// pageObjects/HomePage.js
class HomePage {
    navigate() {
      cy.visit('https://crombie.dev/es');
    }
  
    goToCareersPage() {
      // El selector es el texto dentro del <a> tag que contiene 'Sumate al Equipo'
      cy.get('a[href="/es/join-the-team/form"]').click();
      // Verificar que la URL es correcta después de hacer clic
      cy.url().should('include', '/join-the-team/form');
    }
    goToContactPage()
    {
      // Usar el texto del enlace para hacer clic de forma única en el elemento deseado
    cy.get('a').contains('Contactanos').click();
    // Verificar que la URL es la correcta después de hacer clic
    cy.url().should('include', '/es/contact');
    }
  }
  
  export default HomePage;
  