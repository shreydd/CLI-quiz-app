const chalk = require("chalk");
var readlineSync = require('readline-sync');

console.log("welcome to the quiz, answer in yes or no");
var score = 0;

const userQuestion = ["Am I older than 30? ",
                    "Do I procrastinate alot? ",
                    "Do I like the South Indian food Uppitu / Upma? "
];

var userAnswer = ["no","yes","no"];

function play(){
  for(i=0; i<userQuestion.length; i++) {
    
    let tempAnswer = readlineSync.question(userQuestion[i]).toLowerCase();
    console.log("your entry was "+ tempAnswer);
    
    if (tempAnswer === userAnswer[i]){
      console.log("You are right! ");
      score = score + 1;
      console.log("score is " + chalk.green(score));
    } else{
      console.log("You are wrong ");
      score = score - 1;
      console.log("score is " + chalk.red(score));
    }

  }
  finalMessage();
}

function finalMessage(){
  if(score < 3){
    console.log(chalk.red("Looks like we need to hangout more lol"));
  }
  if(score === 3){
    console.log(chalk.green("Wow you know me well, let's catch up soon "));
  }
}

play();


// var questionOne = "Am I older than 20? ";
// var answerOne = "yes";

// var questionTwo = "Do I live in NZ? ";
// var answerTwo = "no";

// var userAnswer = readlineSync.question(questionOne);

// console.log("your entry was "+ userAnswer);

// if (userAnswer === answerOne){
//   console.log("you are right!");
//   score = score +1;
//   console.log("score is " + score)
// }
//   else{
//     console.log("you are wrong!");
//     score = score -1;
//     console.log("score is:"+ score)
// }

// console.log("your entry was "+ userAnswer);

// var userAnswer = readlineSync.question(questionTwo);

// if (userAnswer === answerTwo){
//   console.log("you are right!");
//   score = score +1;
//   console.log(chalk.black.bgWhite.bold("score is " + score));
// }else{
//   console.log("you are wrong!");
//   score = score -1;
//   console.log(chalk.red("score is:"+ score));
// }


// var readd = require("readline-sync");

// // Wait for user's response.
// var userName = readd.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
 
// // Handle the secret text (e.g. password).
// var favFood = readd.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');




//  var person = prompt("Please enter your name", "Harry Potter");
//   if (person != null) {
//     console.log(
//     "Hello " + person + "! How are you today?");
//   }
