class ThanksPageContact {
    // Verificar que se redirigió correctamente a la página de agradecimiento
    verifyThankYouPageContact() {
        cy.url().should('eq', 'https://crombie.dev/es/contact/thank-you');
        cy.get('p.text-lg.sm\\:text-2xl.font-light.mb-6')
          .should('contain', 'Ya diste el primer paso para que tu proyecto se convierta en un éxito.');
    }

    // Hacer clic en el enlace que lleva a la página principal
    clickHomePageLinkContact() {
        cy.get('a').contains('Página principal').click();
    }

    // Verificar que se redirigió correctamente a la página principal
    verifyHomePageContact() {
        cy.url().should('eq', 'https://crombie.dev/es');
    }
}

export default ThanksPageContact;
