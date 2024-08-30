#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let exchangeRate = {
    'USD': 1,
    'EUR': 0.9,
    'JPY': 113,
    'CAD': 1.3,
    'AUD': 1.5,
    'SAR': 3.75,
    'PKR': 277,
};
console.log(chalk.green('=======================================================>'));
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Select the currency to convert from:',
        type: 'list',
        choices: ['USD', 'EUR', 'JPY', 'CAD', 'AUD', 'SAR', 'PKR']
    },
    {
        name: 'to',
        message: 'Select the currency to convert into:',
        type: 'list',
        choices: ['USD', 'EUR', 'JPY', 'CAD', 'AUD', 'SAR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter the amount to convert:',
        type: 'input'
    }
]);
console.log(chalk.green('=======================================================>'));
let from_currency = user_answer.from;
let to_currency = user_answer.to;
let to_amount = exchangeRate[to_currency];
let from_amount = exchangeRate[from_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(converted_amount);
console.log(chalk.red('=====>'));
console.log(`Converted amount: ${converted_amount.toFixed(2)} ${to_currency}`);
console.log(chalk.red('================================>'));
// let from_amount = exchangeRate[user_answer.from];
// let to_amount = exchangeRate[user_answer.to];
// let amount = user_answer.amount;
// let base_amount = amount / from_amount;
// let converted_amount = base_amount * to_amount;
// console.log(converted_amount);
