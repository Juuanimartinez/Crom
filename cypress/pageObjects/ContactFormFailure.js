// ContactFormFailure.js

class ContactFormFailure {
    constructor() {
        this.url = 'https://crombie.dev/es/contact';
    }

    // Navegar a la página de contacto
    navigate() {
        cy.visit(this.url);
    }

    // Método para rellenar el formulario con datos específicamente inválidos para nombre y país
    fillFormWithSpecificallyInvalidData() {
        cy.get('input[placeholder="Ingresa tu nombre completo"]').type('@@@###$$$'); // Caracteres especiales
        cy.get('input[placeholder="Ingresa tu correo electrónico"]').type('correo@valido.com'); // Email válido
        cy.get('input[placeholder="Ingresa tu país"]').type('12345'); // Números para el país
        cy.get('input[placeholder="Ingresa cómo podemos ayudarte"]').type('Información necesaria'); // Mensaje válido
        cy.get('select[name="hearAboutUs"]').select('Linkedin'); // Opción válida
        cy.get('input[type="checkbox"]').check(); // Marcar el checkbox
    }

    // Método para intentar enviar el formulario
    submitForm() {
        cy.get('button[type="submit"]').click();
    }

    // Método para verificar que el formulario no se envía con datos inválidos
    verifyFormNotSubmitted() {
       
        cy.url().should('eq', this.url); // Verificar que sigue en la página de contacto
    }
}

export default ContactFormFailure;
