class CareersPage {
    selectArea() {
      // Hacer clic en el div para desplegar el menú de áreas
      cy.get('button[data-slot="trigger"][aria-haspopup="listbox"]').first().click({ force: true });

  
      // Esperar a que la animación del menú desplegable se complete si es necesario
      cy.wait(500); // Ajusta el tiempo de espera según sea necesario
  
      // Hacer clic en la opción "Producción" del menú desplegable
      cy.get('li[data-key="production"]').click();
    }
  
    selectPosition() {
      // Haz clic en el botón desplegable del puesto
      cy.get('button[data-slot="trigger"]').contains('Selecciona tu puesto').click({ force: true });

      
      // Esperar a que la animación del menú desplegable se complete si es necesario
      cy.wait(500); // Ajusta el tiempo de espera según sea necesario
  
      // Hacer clic en la opción "Automatización de QA"
      cy.get('li').contains('Automatización de QA').click();
    }
  
    clickNext() {
      cy.get('button').contains('Siguiente').click();
      
    }
  }
  
  export default CareersPage;
  