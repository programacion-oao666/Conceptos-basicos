import Auto from "./Auto.js"

let auto1 = new Auto("Ford", 2000, "Rojo", 100);
let auto2 = new Auto("Nissan", 2018, "Blanco" );
let auto3 = new Auto("VW", 2010);

console.log(`Color ${auto1.color}`); //Lectura
console.log(`color ${auto2.color}`); //Lectura
auto1.color = "Amarillo"; //Escritura
auto2.color = "Azul"; //Escritura
auto1.modelo = 1990;

auto1.encender();
auto1.avanzar(50, 2);
auto1.apagar();
auto1.avanzar(20, 2);

auto2.encender();
auto3.encender();