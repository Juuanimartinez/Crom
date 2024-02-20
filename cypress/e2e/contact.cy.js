import HomePage from '../pageObjects/HomePage';
import ContactFormPage from '../pageObjects/ContactFormPage';
import ThanksPageContact from '../pageObjects/ThanksPageContact';

describe('Sección Contáctanos - Flujo Completo', () => {
    const homePage = new HomePage();
    const contactFormPage = new ContactFormPage();
    const thanksPageContact = new ThanksPageContact()
// otra forma de realizar acciones antes de comenzar la prueba
    beforeEach(() => {
        homePage.navigate();
        homePage.goToContactPage();
    });

    it('valida el flujo completo del formulario de contacto', () => {
        contactFormPage.fillFormWithInvalidData();
        contactFormPage.verifyErrorMessages();
        contactFormPage.clearForm();
        contactFormPage.fillFormWithValidData();
        contactFormPage.intercept();
        thanksPageContact.verifyThankYouPageContact();
        thanksPageContact.clickHomePageLinkContact();
        thanksPageContact.verifyHomePageContact();
       
        
        
    });

    
});
