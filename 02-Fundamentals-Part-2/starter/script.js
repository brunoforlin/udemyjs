/* funcoes

function logger() {
    console.log("my name is bruno")
}

 logger();
 logger();
 logger();

 function soma(numero1, numero2) {
    const somaDosNumeros = numero1 + numero2;
    return somaDosNumeros
 }

 const resultado = soma(10,12);
 const resultado2 = soma(43,65);
 console.log(resultado,resultado2)
 */

 function calcAge1(birthyear) {
    return 2037 - birthyear;
 }

 const age1 = calcAge1(1986);
 console.log(age1);


 const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
 }

 const age2 = calcAge2(1986);
 console.log(age1, age2);

//arrow function
 const calcAge3 = birthday => 2037 - birthday;
 const age3 = calcAge3(1986);
 console.log(age3);