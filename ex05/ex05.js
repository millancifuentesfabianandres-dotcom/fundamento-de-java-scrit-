// Operadores matematicas 

let a, b;
let c, d;

let suma, resta, mult, div, residuo, potencia;

//Obtener los datos a traves del usuario
a = prompt("ingrese un numero");
b= prompt("ingrese otro numero");

// Resultados de las operaciones 
suma = a + b; // Aqui la operacion da un error debido a que se concatenan los datos
document.write("La suma es:", suma, "<br>");
console.log("la suma es: ", suma);

resta = a - b;
document.write("La resta es:", resta, "<br>");
console.log("la resta es: ", resta);

mult = a * b;
document.write("La mult es:", mult, "<br>");
console.log("la mult es: ", mult);

div = a/b;
document.write("La div es:", div, "<br>");
console.log("la div es: ", div);

residuo = a % b;
document.write("La residuo es:", residuo, "<br>");
console.log("la residuo es: ", residuo);

potencia  = a ** b;
document.write("La potencia es:", potencia, "<br>");
console.log("la potencia es: ", potencia);

c = parseInt(prompt("ingrese un numero"));
d = parseFloat(prompt("ingrese otro numero"));

suma = c + d
resta = c - d 
mult = c * d
div = c / d 
residuo = c % d
potencia = c ** d

document.write("Los resultados de las operaciones son: ",
    "suma: ", suma, "<br>",
    "resta: ", resta, "<br>",
    "multiplicacion: ", mult, "<br>",
    "division: ", div, "<br>",
    "residuo: ", residuo, "<br>",
    "potencia: ", potencia, "<br>",
);

console.log("las operaciones resueltas son: ",
    "suma: ", suma, 
    "resta: ", resta, 
    "multiplicacion: ", mult, 
    "division: ", div, 
    "residuo: ", residuo, 
    "potencia: ", potencia, 
)