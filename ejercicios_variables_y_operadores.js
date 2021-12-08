/*
//punto 0)
let nombre = prompt("Ingresa tu nombre aqui: ");
alert(nombre);
alert("Hola " + nombre);

//punto 1)
let n1 = parseInt(prompt("Ingresa un numero: "));
let n2 = parseInt(prompt("Ingresa otro numero al cual se le suma el anterior: "));
let resultado = n1 + n2;
alert("Este es el resultado de la suma: " + resultado);


//punto 2)
let edad = parseInt(prompt("ingresa tu edad"));
let añoActual = 2021;
let resultado2 = añoActual - edad;
alert("Tu año de nacimiento es= " + resultado2);

//punto 3)
let balanceCuenta = 58349;
alert("Tu balance es de: " + balanceCuenta + "$");
let aRetirar = parseInt(prompt("Ingrese el monto a retirar"));
let balanceFinal = balanceCuenta - aRetirar;
alert("En tu cuenta quedan: " + balanceFinal + "$");

*/
//punto 4)
let nro1 = parseInt(prompt("Ingrese una nota"))
let nro2 = parseInt(prompt("Ingrese otra nota"))
let nro3 = parseInt(prompt("Ingrese una última nota"))
let suma = nro1 + nro2 + nro3;
let promedio = suma / 3;
alert("Tu promedio es de: " + promedio);