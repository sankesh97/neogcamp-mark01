const readLineSync = require("readline-sync");

const setOfQuestions = [
  { question: "What is my surname ?", answer: "jain" },
  { question: "Where do I live ?", answer: "hyderabad" },
  { question: "What is my pet's name ?", answer: "pari" },
  { question: "Which mobile game do I play?", answer: "codm" },
  {
    question: "What am I good at ? (Hint: Aalsi in English)",
    answer: "procrastination",
  },
];

const user = {
  name: "",
  score: 0,
};

const welcomeFunc = () => {
  user.name = readLineSync.question("Hey! What's your name ?\n");
  console.log(
    "Hello " + user.name + ', Welcome to the quiz "Do you know Sankesh ?".'
  );
};

const askQuestion = () => {
  for (i of setOfQuestions) {
    let userAnswer = readLineSync.question(i.question + "\n");
    if (userAnswer.toLowerCase() === i.answer.toLowerCase()) {
      console.log("The Answer is right! :) \n");
      user.score += 1;
    } else {
      console.log("The Answer is wrong! :) \n");
    }
    console.log("-_-_-_-_-_-_-_-_-_-_-_- \n");
  }
};

const displayScores = () => {
  console.log("Thanks for playing the game\n");
  if (user.score === 5) {
    console.log("Wow!");
  } else {
    console.log("Awww,");
  }
  console.log("Your score is : " + user.score + " out of 5\n");
};

welcomeFunc();
askQuestion();
displayScores();
