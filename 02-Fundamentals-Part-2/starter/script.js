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

 /*function calcAge1(birthyear) {
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

 const yearUntilRetirement = birthday => {
   const age = 2023 - birthday;
   const retirement = 65 - age;
   return retirement;
   
 }

 console.log(yearUntilRetirement(1986)) */

 //fruit processor

 const cutPieces = function (fruit){
   return fruit * 4;
 }

 function returnJuice(apples, oranges) {
   const applePieces = cutPieces(apples);
   const orangesPieces = cutPieces(oranges);
   const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
   return juice;
 }

 const sucos = returnJuice(5,6);
 console.log(sucos);


 // 
const calcAge = function (year){
   return 2023 - year;
}

 const yearsUntilRetirement = function(birthYear, firstName) {
   const age = calcAge(birthYear);
   const retirement = 65 - age;

   if (retirement > 0 ) {
      console.log(`${firstName} retires in ${retirement} years.`);
      return retirement;
   } else {
      console.log(`${firstName} has already retired.`);
   }
 }

 console.log(yearsUntilRetirement(1986, 'Bruno'));
 console.log(yearsUntilRetirement(1950, 'celso'));