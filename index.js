const config = require('./config/config');
const Parser = require('./classes/Parser');

let p = new Parser(config);
p.run();