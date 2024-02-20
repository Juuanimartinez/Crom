class ApplicationFormPage {
    submitFormWithInvalidData() {
        // Rellena el formulario con datos inválidos
        this.fillName('');
        this.fillEmail("emailIncorrecto");
        this.fillPhoneNumber("123");
        

        // Asume que 'invalid-cv.pdf' es un CV en un formato aceptado 
        this.uploadCV('path-to-cv/cv.pdf'); 
        this.check(); // Marcar el checkbox
        
        // Hace clic en el botón de enviar para intentar enviar el formulario
        this.clickNextAfterDetails();
        
        // Espera explícitamente por la aparición de los mensajes de error
        // Nota: Esto se simplifica para mostrar el concepto. Puedes necesitar ajustar la lógica basada en cómo tu app maneja la visualización de errores.
        cy.get('p.text-red', { timeout: 10000 }).contains('Este campo es requerido').should('be.visible');
        cy.get('p.text-red', { timeout: 10000 }).contains('Formato de email incorrecto').should('be.visible');
        cy.get('p.text-red', { timeout: 10000 }).contains('Formato de número de teléfono incorrecto').should('be.visible');
        this.clearFormFields();
    }
    fillName(name) {
        const nameInput = cy.get('input[name="name"]:enabled[placeholder="Escribe tu nombre"]');
        if (name) {
            nameInput.type(name);
        } else {
            // Si 'name' es una cadena vacía, simplemente enfoca y desenfoca el campo
            // para simular un usuario que toca el campo pero no ingresa nada
            nameInput.focus().blur();
        }
    }
    
  
    fillEmail(email) {
        // Utiliza el atributo 'name', verifica que esté habilitado, y usa el 'placeholder' para seleccionar el input de email
        cy.get('input[name="email"]:enabled[placeholder="Escribe tu email"]').type(email);
    }
  
    fillPhoneNumber(phoneNumber) {
        // Utiliza el atributo 'name', verifica que esté habilitado, y usa el 'placeholder' para seleccionar el input de número de teléfono
        cy.get('input[name="phoneNumber"]:enabled[placeholder="Escribe tu número de teléfono"]').type(phoneNumber);
    }
  
    fillDetails() {
        // Selección directa de la textarea por su atributo 'placeholder'
        cy.get('textarea[placeholder="Escribe aquí..."]').eq(0).type('Texto de prueba');
;

        
    }

    
  
    uploadCV(filepath) {
        // 'filepath' es el camino al archivo CV que se pasará como argumento al método
        cy.get('input[type="file"]').attachFile(filepath);
    }

    check()
    {
        cy.get('input[type="checkbox"]').first().click();

    }

    submitForm() {
        // Configura la interceptación justo antes de enviar el formulario
        cy.intercept('POST', `https://crombie.dev/api/join-us-email
        `).as('formSubmit');

        // Realiza la acción que desencadena la solicitud
        this.clickNextAfterDetails();

        // Espera y verifica la respuesta de la solicitud
        cy.wait('@formSubmit').its('response.statusCode').should('eq', 200);
    }
  
    clickNextAfterDetails() {
        // Hace clic en el botón 'Siguiente' para continuar con el formulario
        cy.get('button').contains('Enviar').click();
    }


    clearFormFields() {
        // Limpia los campos del formulario
        
        cy.get('input[name="email"]:enabled[placeholder="Escribe tu email"]').clear({ force: true });
        cy.get('input[name="phoneNumber"]:enabled[placeholder="Escribe tu número de teléfono"]').clear();
        
    
        // Desmarcar el checkbox si es necesario. Asume que solo hay uno, ajusta según sea necesario.
        cy.get('input[type="checkbox"]').then(checkbox => {
            if (checkbox.is(':checked')) {
                cy.wrap(checkbox).first().click();
            }
        });
    }
}

export default ApplicationFormPage;
