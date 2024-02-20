# Pruebas Automatizadas para Crombie.dev con Cypress

Este repositorio contiene un conjunto de pruebas automatizadas para el sitio web Crombie.dev, utilizando Cypress. Estas pruebas están diseñadas para validar la funcionalidad del formulario de contacto, la navegación en el sitio web, y escenarios específicos donde se esperan fallos.

## Configuración del Proyecto

### Prerrequisitos

Antes de ejecutar las pruebas, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema. Este proyecto requiere Node.js versión 12 o superior.

### Clonar el Repositorio

Para comenzar, clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/Juuanimartinez/Crom.git
cd Crom


Instalación de Dependencias
Este proyecto utiliza Cypress para las pruebas automatizadas y cypress-file-upload para la carga de archivos en los formularios.
Para instalar estas y otras dependencias, ejecuta:
npm install
Ejecutar las Pruebas
Para abrir la interfaz de usuario de Cypress y ejecutar las pruebas interactivamente:
npx cypress open
Si prefieres ejecutar las pruebas en modo headless (útil para la integración continua):
npx cypress run

Estructura del Proyecto
cypress/integration/: Contiene los archivos de prueba (*.cy.js).
cypress/pageObjects/: Implementa el patrón Page Object para mejorar la mantenibilidad del código de prueba.
cypress/fixtures/: Almacena archivos estáticos utilizados en las pruebas, como los archivos PDF para cargar en los formularios.
Pruebas Implementadas
Formulario de Contacto: Verifica el funcionamiento correcto del formulario de contacto, incluyendo validaciones de campo y la redirección a la página de agradecimiento.
Navegación del Menú: Asegura que los enlaces del menú redirigen correctamente a las secciones esperadas del sitio.
Escenarios de Fallo: Incluye pruebas diseñadas para fallar cuando el formulario de contacto se envía con datos inválidos, asegurando que las validaciones funcionan correctamente.
