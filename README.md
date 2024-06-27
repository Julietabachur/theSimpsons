# The Simpsons

## Funcionalidades

### _Seccion 1: Citas de los Simpsons._

    En esta sección, el usuario cuenta con la posibilidad de obtener citas de Los Simpsons. Hay dos maneras:

    - Primero, haciendo clic en el botón correspondiente sin ingresar ningún nombre en el input. Esto devuelve una cita al azar.
    - Segundo, si se ingresa el nombre de un personaje antes de presionar el botón, la API devuelve una cita de ese personaje.

    Por otra parte, si se ingresa un valor numérico, se muestra un mensaje de error. La funcionalidad está implementada con Redux Toolkit usando thunk para el request a la API.

### _Seccion 2: Bio._

    En esta parte se presenta una sección que tiene una botonera que permite alternar entre la biografía de cada personaje.

### _Seccion 3: Noticias._

    Esta sección presenta un listado de noticias acerca de Los Simpsons. Cada noticia tiene una prop esPremium que determina si el usuario puede acceder a la misma o no.

    Si puede, al hacer clic en el botón “Ver más” se abre un modal con el detalle completo de la noticia.
    Si no, se abre un modal que invita al usuario a suscribirse.

## Desarrollo

### Iniciando la App

Instalamos las dependencias

`npm install`

Podemos iniciar nuestra aplicación con el comando

`npm run start`

### Dependencias

Se utilizara la version de React 18.1.0, junto con la version 5 de React Scripts y las siguientes dependencias:

- Redux (incluida @reduxjs/toolkit)
- Typescript
- Thunk
- Styled Components
- Jest
- React Testing Library
- MSW
