"use strict";
// let num = 50;
// let str = String(num);
// console.log(typeof str); // 50

// let language = "RUBY";
// switch (language){
//     case "JavaScript":
//     case "Python":{
//         console.log("I am learning these languages");
//         break;
//     }
//     case "Assembly Language":
//     case "java":{
//         console.log("i'm not learning these languages")
//     }
//     default:{
//         console.log("I don't know which language is this");
//     }
// }
// let countryPopulation = 100;
// countryPopulation >=100 ? console.log("Portugal's population is above average") : console.log("Porugal's population is below average")
// function describeCountry(country, population, capitalCity){
//   return `${country} has a population of ${population} and it's capital city is ${capitalCity}`
// }
// let country = "Finland";
// let country2;
// switch (country){
//     case "Finland":
//       console.log(describeCountry("Finland", "6 million", "Helinski"));
//         break;
//     default:
//         country2 = describeCountry("China", "6 million", "Helinski");
//        console.log(country2);
//        break;
// }
// function percentageOfWorld1(country, population){
//     const worldPopulation = 790000000000;
//     population = population/10000;
//     return `${country} has a population of ${population}`;
// }
// let china = percentageOfWorld1("China", 20000000);
// console.log(china);

// let populationoftheWorld2 = function(country, population){
//     const worldPopulation = 790000000000;
//     population = (population/7900)*100;
//     return `${country} has a population of ${population}`;
// }
// let brazil = populationoftheWorld2("Brazil", 39850000);
// console.log(brazil);
// //declaration
// function calcAge(birthYear){
//     return 2024-birthYear;
// }
// //expression
// const calcAge2 = function(birthYear){
//     return 2024 - birthYear;
// }
// //arrow function
// const calcAge3= birthYear => 2024 - birthYear;
// console.log(calcAge3(2005));
// const populationoftheWorld3 = (country, population) => {
//     const worldPopulation = 89990090909099;
//     population = (population/worldPopulation)*100;
//     return `${country} has a population of ${population}`;
// }
// const australia = populationoftheWorld3("Australia", 890098333);
// console.log(australia);

// const percentageOfWorld1 = population => (population / 7900) * 100;
// const describePopulation = (country, population)=>{
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} people, which is about ${percentage}% of the world. `;
// }
// console.log(describePopulation("Japan", 777));
// const percentageOfWorld1 = population => (population / 7900) * 100;
// const populations = [200, 300, 700, 500]; // Corrected the array to contain 4 elements
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3])
// ];

// console.log(populations.length === 4); // Logging whether the array has 4 elements or not
// console.log(percentages);
// const friends = ['Mary', 'Steven', 'John'];

// const newLength = friends.push('Jay');
// console.log(newLength);
// friends.unshift('Maria');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

// let bill = 800;
// const CalcTip = bill =>{
//     if (bill >= 50 && bill <= 300){
//         return (15/100)*bill;
//     }else{
//         return (20/100)*bill;
//     }
// }
// console.log(CalcTip(bill));
// const bills = [125, 555, 44];
// const tips = [CalcTip(bills[0]),CalcTip(bills[1]),CalcTip(bills[2])];
// console.log(tips);
// const total = [`Your bill is ${bills[0]} and your tip is ${tips[0]}`, `Your bill is ${bills[1]} and your tip is ${tips[1]}`, `Your bill is ${bills[2]} and your tip is ${tips[2]}`];
// console.log(total);
// console.log(bills.indexOf(44));
// const myCountry = {
//     country: 'Nigeria',
//     capital: 'Abuja',
//     language: 'English',
//     population: '500',
//     neighbours: 'Kaduna'
// };
// const interest = prompt('What do you want to know');
// console.log(myCountry[interest]);
// const jonah = {
//     Name: 'Jonah',
//     friends: ['Michael', 'John', 'Marie', 'Tobi'],
//     birthYear: 2005,
//     calcAge: function() {
//         return 2024 - this.birthYear;
//     }
// };

// console.log(`${jonah.Name} has ${jonah.friends.length} friends and his best friend is ${jonah.friends[1]}.`);
// const myCountry = {
//     country: 'Nigeria',
//     capital: 'Abuja',
//     language: 'English',
//     population: '500',
//     neighbours: 'Kaduna',
//     describe: function(){
//     return (`The name of the country is ${this.country}, it's capital is ${this.capital}, the language
//     spoke is ${this.language}, and it's neighbouring state is ${this.neighbours}`);
//     }
// };
// const countryName = myCountry.describe();
// console.log(countryName);
// const interest = prompt('What do you want to know');
// console.log(myCountry[interest]);

// for(i=1; i<=50; i++){
//     console.log(`Voter number ${i} is currently voting`);
// }
// const AnalieseArray = [
//     'Analiese',
//     'Ukeje',
//     2024-2005,
//     'student',
//     ['mmm','ooo','kkk']
// ];
// console.log("ONLY STRINGS")
// for(i=0; i<AnalieseArray.length;i++){
//     if(typeof AnalieseArray[i] !== 'string')continue;
//     console.log(AnalieseArray[i]);
// }
// console.log("break with number");
// for(i=0; i<AnalieseArray.length;i++){
//     if(typeof AnalieseArray[i] === 'number')break;
//     console.log(AnalieseArray[i]);
// };
// const years = [1999, 2000, 2001, 2002];
// const ages = [];
// for(i=0; i<years.length;i++){
//   ages.push(2024-years[i]);
//   console.log(ages);
// }
// for(exercise=1; exercise <4; exercise++){
//     console.log(`-------Starting exercise ${exercise}`);
//     for (rep=1; rep <5; rep++){
//         console.log(`Exercise ${exercise}: Lifting weight repitition ${rep} `);
//     }
// }
// let dice = Math.trunc(Math.random()*6 +1);
// while (dice !== 6){
//     console.log(`You logged a ${dice}`);
//     dice = Math.trunc(Math.random()*6 +1);
//     if(dice ===6){
//         console.log(`Congrats! You logged a ${dice}`);
//     }
// }
// console.log("----------Coding Challenges-----------");
// for (fundamentals = 1; fundamentals < 3; fundamentals++) {
//   console.log("----JAVASCRIPT FUNDAMENTALS----");
//   for (challenge = 1; challenge < 5; challenge++) {
//     console.log(`Coding Challenge ${challenge}`);
//   }
// }
// //challenge 1
// const MarkWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// const markBMI = (markWeight / markHeight) * markHeight;
// const johnBMI = (johnWeight / johnHeight) * johnHeight;
// console.log(`Mark's BMI is ${markBMI}`);
// console.log(`John's BMI is ${johnBMI}`);

//---DOLPHIN AND KOALA SCORES ---
// const DolphinScores = [];
// const KoalaScores = [];

// for (let i = 1; i < 4; i++) {
//   const DolphinQuestion = parseInt(
//     prompt("Enter Dolphin's score for round " + i)
//   );
//   const KoalaQuestion = parseInt(prompt("Enter Koala's score for round " + i));

//   DolphinScores.push(DolphinQuestion);
//   KoalaScores.push(KoalaQuestion);
// }

// console.log("Dolphin's Scores: " + DolphinScores);
// console.log("Koala's Scores: " + KoalaScores);

// let totalDolphinScore = 0;
// let totalKoalaScore = 0;

// for (let i = 0; i < DolphinScores.length; i++) {
//   totalDolphinScore += DolphinScores[i];
// }

// for (let i = 0; i < KoalaScores.length; i++) {
//   totalKoalaScore += KoalaScores[i];
// }

// const averageDolphinScores = totalDolphinScore / DolphinScores.length;
// const averageKoalaScores = totalKoalaScore / KoalaScores.length;

// if (averageDolphinScores > averageKoalaScores && averageDolphinScores >= 100) {
//   console.log("Dolphins Win!!!");
// } else if (
//   averageKoalaScores > averageDolphinScores &&
//   averageKoalaScores >= 100
// ) {
//   console.log("Koalas Win!!!");
// } else if (
//   averageDolphinScores === averageKoalaScores &&
//   averageDolphinScores >= 100 &&
//   averageKoalaScores >= 100
// ) {
//   console.log("It's A DRAW!!!");
// } else {
//   console.log("NO WINNER!!");
// }
const DolphinScores = [90, 80, 120];
const KoalaScores = [95, 85, 125];
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let totalDolphinScore = 0;
let totalKoalaScore = 0;
for (let i = 0; i <= DolphinScores.length; i++) {
  totalDolphinScore += DolphinScores[i];
}
for (let p = 0; p <= KoalaScores.length; p++) {
  totalKoalaScore += KoalaScores[p];
}
const avgDolphinScore = totalDolphinScore / DolphinScores.length;
const avgKoalaScore = totalKoalaScore / KoalaScores.length;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphinScore} vs ${avgKoalaScore}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalaScore} vs ${avgDolphinScore}`);
  } else {
    console.log("Noone wins");
  }
};
const Koalas = checkWinner(avgDolphinScore, avgKoalaScore);
const Dolphins = checkWinner(avgKoalaScore, avgDolphinScore);

// const tip = parseInt(prompt("Enter your tip: "));

// const CalcTip = tip >= 50 && tip <= 100 ? tip * 0.15 : tip * 0.2;
// console.log("Your tip is " +CalcTip.toFixed(2));
//function declaration
//---tip calculator---
// function calcTip(a){
//   if (a >= 50 && a <= 100) {
//     return a * 0.15;
//   } else {
//     return a * 0.2;
//   }
// }
// const bills = [
//   125,
//   555,
//   44
// ];
// const tips = [
// calcTip(bills[0]),
// calcTip(bills[1]),
// calcTip(bills[2])
// ];
// const total = [
//   tips[0] + bills[0],
//   tips[1] + bills[1],
//   tips[2] + bills[2]
// ];
// console.log(`The bills are ${bills}, the tips are ${tips}, and the total is ${total}`);
// const hundred = calcTip(100);
// console.log(hundred);

const objectJohn = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};
const objectMark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};
const MarkBMI = objectMark.calcBMI();
const JohnBMI = objectJohn.calcBMI();
if (MarkBMI > JohnBMI) {
  console.log(
    `Mark's BMI (${MarkBMI.toFixed(
      2
    )})is higher than John"s BMI (${JohnBMI.toFixed(2)})`
  );
} else {
  console.log(
    `John's BMI (${JohnBMI.toFixed(
      2
    )}) is higher than Mark's BMI (${MarkBMI.toFixed(2)})`
  );
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(a) {
  if (a >= 50 && a <= 100) {
    return a * 0.15;
  } else {
    return a * 0.2;
  }
}
for (let i = 0; i <= bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(
  `The bills are ${bills}, the tips are ${tips}, and the total is ${totals}`
);
//DOM MANIPULATION
document.querySelector("h1").innerHTML = "JAVASCRIPT FUNDAMENTALS";
