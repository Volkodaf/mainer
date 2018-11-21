class config {
    constructor() {
        this.search = {
            locations: [
                'Russia'
            ],
            repos: '>1',
            language: 'TypeScript',
            type: 'Users',
        };

        this.select = [
            'username',
            'fullName',
            'location',
            'repositories'
        ];

        this.output = {
            type: 'file',
            path: 'output/data.json'
        }
    }
}

module.exports = new config();