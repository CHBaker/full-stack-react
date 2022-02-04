class StateApi {

    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors)
        }
    }

    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {})
    }



    getArticles() {
        return this.mapIntoObject(this.rawData.articles)
    }

    getAuthors() {
        return this.mapIntoObject(this.rawData.authors)
    }

    lookupAuthor = (authorID) => {
        return this.data.authors[authorID]
    }

    getState = () => {
        return this.data;
    }
}

module.exports = DataApi
