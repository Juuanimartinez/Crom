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
    submitFormAndVerifyFailure() {
        // Guarda la URL actual antes de enviar el formulario
        cy.url().then((currentUrl) => {
            // Envía el formulario
            this.submitForm();
    
            // Espera un momento para que se procese el envío y potencial redirección
            cy.wait(1000); 
    
            // Verifica si la URL cambió después de intentar enviar el formulario
            cy.url().then((newUrl) => {
                if (newUrl !== currentUrl) {
                    // Si la URL cambió, lanza un error para fallar la prueba
                    throw new Error('La prueba falló porque se realizó una redirección inesperada después de enviar el formulario.');
                } else {
                    // Aquí incluir verificaciones adicionales para mensajes de error si no hubo redirección
                    cy.get('body').then(($body) => {
                        if ($body.find('p.text-red:contains("Lo siento, este campo")').length === 0) {
                            // Si no se encuentran los mensajes de error esperados, lanza un error para fallar la prueba
                            throw new Error('La prueba falló porque no se detectaron mensajes de error como se esperaba.');
                        }
                    });
                }
            });
        });
    }
    
}

export default ContactFormFailure;
