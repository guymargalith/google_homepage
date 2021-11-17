const websiteData = require('../data');

class Website {
    constructor(data){
        this.url = data.url;
        this.title = data.title;
        this.description = data.description;
    }

    static get all() {
        const websites = websiteData.map((site) => new Website(site));
        return websites;
    }

}

module.exports = Website;