/*
let js = "amazing"
if (js === "amazing") alert('javascript is amazing')
console.log(50-20-4);
  
let javascriptIsFun = true;
console.log (javascriptIsFun)
console.log (typeof true)
console.log (typeof 23)
console.log (typeof 'Jonas')

javascriptIsFun = 'yes!' */

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
/*
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
console.log (century) */

/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".*/


/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`"John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

//mudar string pra numero e vice e versa

const inputYear = '1991';

console.log(Number(inputYear + 18)); // POR EXEMPLO, PODE-SE SOMAR NUMEROS COLOCANDO O Number, ou o contrario usando String
console.log (String(23));

*/
/*
const favNumber = Number(prompt("what's your favorite number ?"));
console.log( typeof favNumber)



//and && or || - not !

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Bruno is able to drive.")
} else {
    console.log("Someone else should drive...")
} */
/*
1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

3. tem que ter no mimino 100 pontos

*/


/*exercicio condicional 

const scoreDolphins = (96 + 108 + 45) / 3;
const scoreKoalas = (96 + 108 + 39) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy"); }
    else if(scoreKoalas > scoreDolphins && scoreKoalas >=100) { console.log("Koalas win the trophy");
} else if(scoreDolphins===scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("No team win the trophy");
}
*/

// switch case
/*
const day = 'thurday';

switch (day) {
    case 'monday':
       console.log('plan course structure');
        break;
    case 'tuesday': 
        console.log ('prepare theory videos');
        break;
    case 'wednesday': 
    case 'thurday': 
        console.log('write code examples');
        break;
    case 'fryday' :
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday' : 
        console.log ('enjoy the weekend');
        break;

    default:
        console.log ('not a valid day')
        break;
} */

const age = 15;
//age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)


const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
console.log (tip);
 
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);