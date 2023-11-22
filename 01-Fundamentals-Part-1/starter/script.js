let js = "amazing"
if (js === "amazing") alert('javascript is amazing')
console.log(50-20-4);
  
let javascriptIsFun = true;
console.log (javascriptIsFun)
console.log (typeof true)
console.log (typeof 23)
console.log (typeof 'Jonas')

javascriptIsFun = 'yes!'

//para comentar, só colocar as duas barras, js é tipagem dinamica, ou seja, ela identifica automatico que
//identifica sozinha os tipos primitivos das variáveis, se é boolean, string, ou numero.

// variaveis const, let e var. let serve pra variaveir que mudam ,const imutaveis, var é legado

/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990; nao pode no js.
*/
/*
const now = 2037;
const ageBruno = now - 2008;
const ageSara = now - 2016;
console.log(ageBruno, ageSara)
console.log(ageBruno / 2, ageBruno * 2, 2**3)
// ** significa exponencial

const firstName = 'bruno'
const lastName = 'forlin'
console.log(firstName + ' ' + lastName)
//assigment operators
let x = 10 +5;
x += 10;
x*= 4;
x++;
x--;
console.log(x);

//comparisson operators
console.log (ageSara >= 18)
const averageAge = (ageSara + ageBruno) / 2
console.log(averageAge)

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightjohn = 1.95

const BMIMark = massMark / (heightMark * heightMark)
const BMIJohn = massJohn / (heightjohn * heightjohn)
console.log(BMIJohn, BMIMark)

//strings

const firstName2 = 'bruno';
const birthYear = 1986;
const year = 2023;
const job = 'driver';

const brunoNew = `i'm ${firstName2}, a ${year - birthYear} year old ${job}`
console.log(brunoNew)
//multiple strings

console.log(`strings
in multiple
lines`) */

//teste carteira motorista
/*
const age = 17;
const isOldEnough = age >= 18;

console.log(isOldEnough);
if (isOldEnough) {
    console.log(`bruno can start driving license`)
}
*/

const age = 19;

if (age >= 18) {
    console.log(`Bruno can start driving license`)
} else {
   const yearsLeft = 18 - age;
   console.log(`Bruno is too young, wait another ${yearsLeft} years.`) 
}


const birthYear = 1986;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log (century)