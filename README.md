# FrontendNewshore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Pre-requisitos:

- Contar con Node JS instalado
- Haber ejecutado el Backend en el puerto 44329 (suele ser el puerto por defecto)

## Instrucciones:

1. Abrir una terminal y ubicarse en la carpeta del proyecto
2. Ejecutar npm i o npm i --force en caso de error
3. Ejecutar ng s
4. Abrir el navegador e ingresar a: http://localhost:4200/

## Se realizó:

1. Se realiza la conversion de monedas con la ayuda de una API para obtener las tasas de cambios y que de esta manera la información sea actualizada
2. Se creo una directiva personalizada para convertir el texto a mayusculas al momente de registrarse por un input, se creo una validación personalizada para comprobar que los campos no fueran iguales y se usaron las validaciones de angular para verificar que no superara los 3 caracteres
3. Se usaron variables, mixins y nesting en scss para aplicar estilos, no se usaron librerías externas para estilos como bootstrap
4. Se realizaron dos casos para un test unitario del componente currency selector (el test pasó al momento de probarlo pero puede fallar en otro momento debido a que las tasas de cambio suelen variar diariamente)
5. Se hizo uso del currency pipe de angular para formatear de una manera amigable los precios
6. Se realizo inyección de dependencias en varios casos como en el uso del modulo http de los services
7. Se siguió el paradigma orientado a objetos con clases en Angular
8. Se realizaron varios commits en GIT para el control de versiones

## No se realizó

1. Uso de state managers, aunque se reconoce que hubiera sido de utilidad el uso de alguna librería como RxJs Store (Basada en Redux)
2. Uso de interceptors e injection tokens, no se encontró donde aplicarlos
3. Logs de la aplicación
