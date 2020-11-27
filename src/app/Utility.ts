var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const askAndGet = async (argument: string) => (await new Promise(resolve => {
    rl.question(argument, (answer:String) => resolve(answer))
}).catch((err) => (console.error(err)))); 