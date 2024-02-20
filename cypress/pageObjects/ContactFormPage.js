class ContactFormPage {
    // Método para rellenar el formulario con datos incorrectos
    fillFormWithInvalidData() {
        cy.get('input[placeholder="Ingresa tu nombre completo"]').type('a'); // Provocará error de mínimo de caracteres
        cy.get('input[placeholder="Ingresa tu correo electrónico"]').type('correo-no-valido'); // Provocará error de formato de email
        cy.get('input[placeholder="Ingresa tu país"]').type('1'); // Provocará error de mínimo de caracteres
        cy.get('input[placeholder="Ingresa cómo podemos ayudarte"]').type('a'); // Provocará error de mínimo de caracteres
        cy.get('select[name="hearAboutUs"]').select('Linkedin');
        cy.get('input[type="checkbox"]').check();
        this.submitForm(); // Intenta enviar el formulario
    }

    // Método para verificar los mensajes de error específicos
    verifyErrorMessages() {
        // Intenta enviar el formulario para que aparezcan los mensajes de error
        this.submitForm();

        // Espera y verifica el mensaje de error para el campo "nombre completo"
        cy.get('input[placeholder="Ingresa tu nombre completo"]').then(($input) => {
            if ($input.val().length < 2) {
                cy.get('p.text-red', { timeout: 10000 }).contains('Lo siento, este campo requiere al menos 2 caracteres').should('be.visible');
            } else if ($input.val() === '') {
                cy.get('p.text-red', { timeout: 10000 }).contains('Lo siento, este campo es obligatorio').should('be.visible');
            }
        });

        // Repite el proceso para los demás campos...
        cy.get('input[placeholder="Ingresa tu correo electrónico"]').then(($input) => {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($input.val())) {
                cy.get('p.text-red', { timeout: 10000 }).contains('Lo siento, este campo debe ser un email valido').should('be.visible');
            } else if ($input.val() === '') {
                cy.get('p.text-red', { timeout: 10000 }).contains('Lo siento, este campo es obligatorio').should('be.visible');
            }
        });

        cy.get('input[placeholder="Ingresa tu país"]').then(($input) => {
            if ($input.val().length < 2) {
                cy.get('p.text-red', { timeout: 10000 }).contains('Lo siento, este campo requiere al menos 2 caracteres').should('be.visible');
            } else if ($input.val() === '') {
                cy.get('p.text-red', { timeout: 10000 }).contains('Lo siento, este campo es obligatorio').should('be.visible');
            }
        });

        cy.get('input[placeholder="Ingresa cómo podemos ayudarte"]').then(($input) => {
            if ($input.val().length < 2) {
                cy.get('p.text-red', { timeout: 10000 }).contains('Lo siento, este campo requiere al menos 2 caracteres').should('be.visible');
            } else if ($input.val() === '') {
                cy.get('p.text-red', { timeout: 10000 }).contains('Lo siento, este campo es obligatorio').should('be.visible');
            }
        });
    }

    // Método para limpiar el formulario antes de rellenarlo correctamente
    clearForm() {
        cy.get('input[placeholder="Ingresa tu nombre completo"]').clear();
        cy.get('input[placeholder="Ingresa tu correo electrónico"]').clear();
        cy.get('input[placeholder="Ingresa tu país"]').clear();
        cy.get('input[placeholder="Ingresa cómo podemos ayudarte"]').clear();
        // El checkbox permanece marcado según el requerimiento
    }

    // Método para rellenar el formulario con datos válidos
    fillFormWithValidData() {
        cy.get('input[placeholder="Ingresa tu nombre completo"]').type('Nombre Correcto');
        cy.get('input[placeholder="Ingresa tu correo electrónico"]').type('correo@valido.com');
        cy.get('input[placeholder="Ingresa tu país"]').type('País Válido');
        cy.get('input[placeholder="Ingresa cómo podemos ayudarte"]').type('Necesito información sobre...');
        cy.get('select[name="hearAboutUs"]').select('Linkedin');
    }
    //interceptar request
    intercept()
    {
        cy.intercept('POST', 'https://crombie.dev/api/contact').as('contactRequest');
        this.submitForm();
        cy.wait('@contactRequest').its('response.statusCode').should('eq', 200);
    }

    // Método para enviar el formulario
    submitForm() {
        
        cy.get('button[type="submit"]').click();
    }
}

export default ContactFormPage;
