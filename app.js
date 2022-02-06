//Función clásica
function greet(){
    console.log("Hola");
}
greet();

//La función recibe una función como parámetro
function logGreeting(fn){
    fn(); //Ejecuta la función, si se ejecuta no se reconoce a fn como una función
}
logGreeting(greet);

//Le declaramos a una variable una función
let greetMe = function(){
    console.log('Hello from the funtion expression');
}
greetMe();

//Le da la función greetMe para que se ejecute dentro de logGreeting
logGreeting(greetMe);