//Función clásica
/*function greet(){
    console.log(`Hola`);
}*/

//Función flecha
let greet = () => console.log(`Hola`);
greet();

//La función recibe una función como parámetro
/*function logGreeting(fn){
    fn(); //Ejecuta la función; si se trata de ejecutar un dato, no se reconoce a fn como una función
}*/

//Función flecha
let logGreeting = fn => fn();
logGreeting(greet);

//Le declaramos a una variable una función
/*let greetMe = function(){
    console.log(`Hello from the function expression`);
}*/

//Función flecha
let greetMe = () => console.log(`Hello from the function expression`);
greetMe();

//Le da la función greetMe para que se ejecute dentro de logGreeting
logGreeting(greetMe);