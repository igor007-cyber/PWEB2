// import chalk from 'chalk';

// console.log(chalk.green('hello node js'))

const fs = require('fs');

fs.readFile('example.txt','utf8',(err, data) => {
    if (err) throw err;
    console.log(data)
})

fs.writeFile('example.txt','ola meu lindo',(err) =>{
    if (err) throw err;
    console.log('file has been written')
})

fs.appendFile('example.txt','ola meu lindo',(err) =>{
    if (err) throw err;
    console.log('file has been written')
})