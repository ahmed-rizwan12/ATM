#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let mybalance = 10000;
let mypin = 12334;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin number?",
        type: "number",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log("correct");
    let optionAns = await inquirer_1.default.prompt([
        {
            name: "option",
            message: "your balance is :" + mybalance,
            type: "list",
            choices: ["withdraw", "checkbalance"]
        },
    ]);
    if (optionAns.option === "withdraw") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount ",
                type: "number",
            },
        ]);
        mybalance -= amountAns.amount;
        console.log("your ramaining balace is: " + mybalance);
    }
    else if (optionAns.option === "check baLance") {
        console.log("your blance is: " + mybalance);
    }
}
else {
    console.log("incorrect pin code!!!");
}
