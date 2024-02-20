// En tu archivo de pruebas, por ejemplo, contact_failure.cy.js

import ContactFormFailure from '../pageObjects/ContactFormFailure';

describe('Pruebas de fallo en el formulario de contacto', () => {
    const contactFormFailure = new ContactFormFailure();

    beforeEach(() => {
        contactFormFailure.navigate();
    });

    it('no permite el envío del formulario con nombre y país inválidos', () => {
        contactFormFailure.fillFormWithSpecificallyInvalidData();
        contactFormFailure.submitForm();
        contactFormFailure.verifyFormNotSubmitted();
    });
});
