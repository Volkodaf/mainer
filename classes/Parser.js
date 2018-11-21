const https = require('https');
const html = require('./Html');
const config = require('../config/config');

class Parser
{
    constuctor() {
    }

    run() {
        https.get('https://github.com/search?q=location:'+config.search.locations+' repos:'+config.search.repos+' language:'+config.search.language+'&type='+config.search.type, (res) => {
            res.on('data', (d) => {
                let h = new html(d);
                h.run();
            });

        }).on('error', (e) => {
            console.error(e);
        });
    }
}

module.exports = Parser;