const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('姓名?', data => {
    console.log('答案', data);
    rl.close();
});
rl.on('close', () => {
    process.exit(0);
});
