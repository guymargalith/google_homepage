const searchData = require('../data');

class Search {
    constructor(data){
        this.name = data.name;
        this.sites = data.sites;
    }

    static get all() {
        const searches = searchData.map((search) => new Search(search));
        return searches;
    }

    static findByName(name) {
        try {
            const aSearchData = searchData.filter((search) => search.name.toLowerCase() === name)[0];
            const search = new Search(aSearchData);
            return search;
        } catch(err){
            throw new Error("That search topic isn't real");
        };
    };
}

module.exports = Search;