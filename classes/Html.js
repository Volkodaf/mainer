const cheerio = require('cheerio');
const fs = require('fs');
const config = require('../config/config');

class Html
{
    constructor(data) {
        console.log(data);
        this.$ = cheerio.load(data);
    }

    run() {
        let users = this.$('.user-list-info');
        let full_data = [];
        console.log(users);
        return;
        for(let i=0; i<users.length; i++) {
            let user = users[i];
            console.log(user.html());
            continue;
            let location = user.find('.user-list-meta')[0].find('li')[0].find('svg')[0].html();
            let data = {
                'username': user.find('a')[0].html(),
                'fullname': user.find('.d-block')[0].html(),
                'location':location
            };
            full_data.push(data);
        }

        fs.writeFile(config.output.path, full_data, (err) => {
            if(err) console.log(err);

            console.log("ok");
        })
    }
}

module.exports = Html;