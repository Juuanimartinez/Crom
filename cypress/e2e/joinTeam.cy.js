import HomePage from '../pageObjects/HomePage';
import CareersPage from '../pageObjects/CareersPage';
import ApplicationFormPage from '../pageObjects/ApplicationFormPage';
import ThanksPage from '../pageObjects/ThanksPage';


describe('Join Team Process', () => {
  const homePage = new HomePage();
  const careersPage = new CareersPage();
  const applicationFormPage = new ApplicationFormPage();
  const thanksPage = new ThanksPage();

  it('allows user to apply for a job', () => {
    homePage.navigate();
    homePage.goToCareersPage();
    careersPage.selectArea('Producción');
    careersPage.clickNext();
    careersPage.selectPosition('Automatización de QA');
    careersPage.clickNext();
    applicationFormPage.submitFormWithInvalidData();
    applicationFormPage.fillName('Juan Manuel Martinez');
    applicationFormPage.fillEmail("juuanimartinez@gmail.com");
    applicationFormPage.fillPhoneNumber("2216757667");
    applicationFormPage.fillDetails("soy juan manuel 50 años")
    applicationFormPage.uploadCV('path-to-cv/cv.pdf');
    applicationFormPage.check(); 
    applicationFormPage.submitForm();
    thanksPage.verifyThankYouPage();
    thanksPage.clickHomePageLink();
    thanksPage.verifyHomePage();
  });
});
