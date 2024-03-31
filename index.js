#! /usr/bin/env node
import inquirer from "inquirer";
//1) Computer will generate a render number
//2) Input from user for guessing any number
//3) Compare the user input with computer generated number
const random_Number = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Guess Any Number Between 1 to 6: ",
    },
]);
//console.log(answers);
if (answers.UserGuessedNumber === random_Number) {
    console.log("Congratulations! You Guessed Right Number.");
}
else {
    console.log("Sadly! You Guessed Wrong Number.");
}
