#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let answer = await inquirer.prompt([{
        name: "q1",
        type: "list",
        message: "Enter from currency:",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'q2',
        type: 'list',
        message: 'Enter to currency',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'q3',
        type: 'number',
        message: 'Enter your amount',
    }]);
let fromAmount = currency[answer.q1];
let toAmount = currency[answer.q2];
let amount = answer.q3;
let givenAmount = amount / fromAmount;
let convertedAmount = givenAmount * toAmount;
console.log(convertedAmount);
