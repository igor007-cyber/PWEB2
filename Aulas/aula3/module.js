module.exports = {
    greet: function(name){
        console.log(`hello ${name}`);
    }
}

const myModule = require('./module')
myModule.greet('Node.js')