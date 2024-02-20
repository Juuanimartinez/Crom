class ThanksPage {
    // Verificar que se redirigió correctamente a la página de agradecimiento
    verifyThankYouPage() {
        cy.url().should('eq', 'https://crombie.dev/es/join-the-team/thank-you');
    }

    // Hacer clic en el enlace que lleva a la página principal
    clickHomePageLink() {
        cy.get('a').contains('Página principal').click();
    }

    // Verificar que se redirigió correctamente a la página principal
    verifyHomePage() {
        cy.url().should('eq', 'https://crombie.dev/es');
    }
}

export default ThanksPage;
