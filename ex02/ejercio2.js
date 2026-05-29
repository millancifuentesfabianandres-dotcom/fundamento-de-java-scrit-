/*}
var se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.

let se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.

const se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización
*/

var nombre;//declarar una variable con
nombre = "juan"; //asignar un valor a la variable 

var apellido = "perez";//declarar y asignar una variable en una sola line 

console.log(nombre);//imprime "juan "
console.log(apellido);//imprime "perez"

let edad = 30; // declarar y asignar una variable con let 
console.log(edad);// imprime 30

edad = 31;// reasignar el valor de la variable edad 
console.log(edad);// imprime 31

const PI = 3.1416;// declarar una constante
console.log(PI);//imprime 3.1416
