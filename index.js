import inquirer from "inquirer";
let userBalance = 10000;
let userPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter you PIN",
        type: "number"
    }
]);
if (pinAnswer.pin == userPin) {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please enter amount",
                type: "number",
            }
        ]);
        if (userBalance >= withdrawAns.amount) {
            userBalance = userBalance - withdrawAns.amount;
            console.log(`Success , your balance is ${userBalance}`);
        }
        else {
            console.log("Not Enough Balance!");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${userBalance}`);
    }
}
else {
    console.log("Invalid PIN!");
}
