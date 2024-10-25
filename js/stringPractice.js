/*Ejercicio 2 Primera Parte */

//Declare una variable denominada challenge y asígnela a un valor inicial '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

//Imprimala cadena en la consola del navegador usando console.log()
console.log(challenge);
// Resultado: '30 Days Of JavaScript'

//Imprimala longitud de la cadena en la consola del navegador usando console.log()
console.log(challenge.length); 
// Resultado: 21 (la longitud de la cadena)

//Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
console.log(challenge.toUpperCase());
// Resultado: '30 DAYS OF JAVASCRIPT' (convierte todos los caracteres a mayúsculas)

//Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(challenge.toLowerCase());
// Resultado: '30 days of javascript' (convierte todos los caracteres a minúsculas)

//Corta(extraer) la primera palabra de la cadena usando el método substr() o substring()
console.log(challenge.substr(3,5));
// Resultado: 'Days' (extrae 5 caracteres a partir del índice 3)

//Cortala frase Days Of JavaScript de 30 Days Of JavaScript
console.log(challenge.substring(3,21));
// Resultado: 'Days Of JavaScript' (extrae caracteres desde el índice 3 hasta el 21)

//Compruebesi la cadena contiene una palabra Script usando el método include()
console.log(challenge.includes('Script'));
// Resultado: true (comprueba si 'Script' está en la cadena)

//Divida la cadena en una matriz usando el método split()
console.log(challenge.split(' '));
// Resultado: ['30', 'Days', 'Of', 'JavaScript'] (divide la cadena en un array)

//Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena por la coma y la cambia a una matriz.
let apps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

//Imprimir la variable dividida por comas
console.log(apps.split(', '));
// Resultado: ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Cambie 30 días de JavaScript a 30 días de Node usando el método reemplazar().
console.log(challenge.replace('JavaScript', 'Node'));
// Resultado: '30 Days Of Node' (reemplaza 'JavaScript' por 'Node')

/*Ejercicio 2 Segunda Parte */

//¿Cuál es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(challenge.charAt(15));
// Resultado: 'S' (devuelve el carácter en la posición 15)

//¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()?
console.log(challenge.charCodeAt('J'));
// Resultado: 51 (devuelve el código de carácter para 'J', que es 51 en UTF-16)

//Utilice indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(challenge.indexOf('a'));
// Resultado: 4 (devuelve el índice de la primera aparición de 'a')

//Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(challenge.lastIndexOf('a'));
// Resultado: 14 (devuelve el índice de la última aparición de 'a')

// Utilice indexOf para encontrar la posición de la primera aparición de la palabra because en la siguiente oración: You cannot end a sentence with because because because is a conjunction'
/* Declara nueva variable*/
let phrase = 'You cannot end a sentence with because because because is a conjunction';

console.log(phrase.indexOf('because')); 
// Resultado: 31 (encuentra la primera aparición de 'because')

// Utilice lastIndexOf para encontrar la posición de la última aparición de la palabra because en la misma oración
console.log(phrase.lastIndexOf('because')); 
// Resultado: 47 (encuentra la última aparición de 'because')

// Utilice la búsqueda para encontrar la posición de la primera aparición de la palabra because en la oración
console.log(phrase.search('because')); 
// Resultado: 31 (utiliza search() para la primera aparición de 'because')

/*Ejercicio 2 tercera parte */

//Utilice trim() para eliminar cualquier espacio en blanco al principio y al final de una cadena.Por ejemplo, '30 días de JavaScript'.
let spaceword = '       30 Days Of JavaScript     ';

//Imprimir la cadena original con los espacios en blanco
console.log(spaceword);
// Resultado: '       30 Days Of JavaScript     ' (cadena con espacios al principio y al final)

//Aplicar el método trim() para eliminar espacios al principio y al final
console.log(spaceword.trim());
// Resultado: '30 Days Of JavaScript' (elimina los espacios en blanco al principio y al final)

//Utilice el método startWith() con la cadena 30 Days Of JavaScript y haga que el resultado sea verdadero
console.log(challenge.startsWith('3'));
// Resultado: true (comprueba si la cadena comienza con '3')

//Utilice el método terminaCon() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(challenge.endsWith('Script'));
// Resultado: true (comprueba si la cadena termina con 'Script')

//Utilice el método match() para encontrar todas las a en 30 días de JavaScript
console.log(challenge.match(/a/gi));
// Resultado: ['a', 'a', 'a'] (devuelve un array con todas las coincidencias de 'a'

//Utilice concat() y combine '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let number = '30';

console.log(number.concat('Days','of', 'JavaScript'));
// Resultado: '30DaysofJavaScript' (concatena las palabras en una sola cadena)

//Utilice el método repetir() para imprimir 30 días de JavaScript 2 veces
console.log(challenge.repeat(2));
// Resultado: '30 Days Of JavaScript30 Days Of JavaScript' (repite la cadena 2 veces)
