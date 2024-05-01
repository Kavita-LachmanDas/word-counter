#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
while (condition) {
    const result = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "enter your sentence/word which you want to count "
        }
    ]);
    let result1 = result.sentence.trim().split(" ");
    console.log(result1);
    let words = result1.length;
    console.log("your sentence word count is " + words);
}
