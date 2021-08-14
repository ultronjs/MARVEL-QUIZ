var readlineSync = require('readline-sync')
const chalk = require('chalk');
var score= 0;


function play(question,options,answer)
{
  index = readlineSync.keyInSelect(options, question);
  if(index === answer){
    console.log(chalk.green("U r right!!!"));
    score++;

  }else{
    console.log(chalk.red("U r wrong :("));

  }
  console.log("Your Score: " + score)
}

var quesBank = [
{
	question:"What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
	options:[2005,2008,2010,2012],
	answer:1
},{
	question:"What is the name of Thor’s hammer?",
	options:["Vanir","Mjolnir","Aesir","Norn"],
	answer:1
},{
	question:"What is Captain America’s shield made of",
	options:["Adamantium","Vibranium","Promethium","Carbonadium"],
	answer:1
},{
	question:"Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
	options:["H.O.M.E.R.","J.A.R.V.I.S.","A.L.F.R.E.D.","M.A.R.V.I.N."],
	answer:1
},{
	question:"What is the real name of the Black Panther?",
	options:["T’Challa","M’Baku","N’Jadaka","N’Jobu"],
	answer:0
}
]

var userName = readlineSync.question('Enter your username ');
console.log('Hi ' + userName + '!');

for(var i=0;i<quesBank.length;i++){
  play(quesBank[i].question,quesBank[i].options,quesBank[i].answer)
}

console.log("YAY U have completed the game.Your final score is: " + score);