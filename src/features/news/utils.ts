/**
 * Capitaliza la primera letra de cada palabra en una cadena de texto.
 * @param {string} text - La cadena de texto a capitalizar.
 * @returns {string} La cadena de texto con cada palabra capitalizada.
 *
 * @description
 * Esta función fue extraída del componente `Noticias` para reutilizar lógica común.
 *
 * Refactorizaciones:
 * - Extracción de la lógica de capitalización a una función utilitaria.
 *
 * Principios SOLID aplicados:
 * - **SRP (Single Responsibility Principle)**: Función que maneja solo la capitalización de palabras.
 * - **DIP (Dependency Inversion Principle)**: Las dependencias se manejan a través de funciones utilitarias reutilizables.
 */

export const capitalizeTitle = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Calcula el tiempo transcurrido desde una fecha dada en minutos.
 * @param {Date} date - La fecha desde la cual calcular el tiempo transcurrido.
 * @returns {string} El tiempo transcurrido en minutos.
 *
 * @description
 * Esta función fue extraída del componente `Noticias` para reutilizar lógica común.
 *
 * Refactorizaciones:
 * - Extracción de la lógica de cálculo de tiempo a una función utilitaria.
 *
 * Principios SOLID aplicados:
 * - **SRP (Single Responsibility Principle)**: Función que maneja solo el cálculo de tiempo transcurrido.
 * - **DIP (Dependency Inversion Principle)**: Las dependencias se manejan a través de funciones utilitarias reutilizables.
 */
export const calculateTime = (date: Date): string => {
  const now = new Date();
  const minutes = Math.floor((now.getTime() - date.getTime()) / 60000);
  return `Hace ${minutes} minutos`;
};
