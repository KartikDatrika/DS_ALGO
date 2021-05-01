var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const askAndGet = async (argument: string) => (await new Promise(resolve => {
    rl.question(argument, (answer:String) => resolve(answer))
}).catch((err) => (console.error(err)))); 

export const isGreater = (num1: number, num2: number) => num1 > num2;

export const isLesser = (num1: number, num2: number) => num1 < num2;
