#! /usr/bin/env node
import inquirer from  "inquirer"
let mybalance = 10000;
let mypin = 12334;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin number?",
            type: "number",
        },
    ]
);
if (pinAnswer.pin === mypin) {
    console.log("correct");
    let optionAns = await inquirer.prompt(
        [
            {
                name: "option",
                message: "your balance is :" + mybalance,
                type: "list",
                choices: ["withdraw" , "checkbalance"]
            },
        ]
    ); 
   
    if (optionAns.option === "withdraw") {

     let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount ",
                type: "number",
              
            },
        ]
    ); 
    mybalance -= amountAns.amount;   
    
     console.log("your ramaining balace is: " + mybalance);
    }  
    else if (optionAns.option === "check baLance") {
        console.log("your blance is: " + mybalance);
        
        
    } 
     
}
else{
    console.log("incorrect pin code!!!");
    
}

