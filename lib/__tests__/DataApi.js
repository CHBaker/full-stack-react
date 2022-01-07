import DataApi from "../DataApi";
import { data } from '../testData.json';

const api = new DataApi(data)

describe('DataApi', () => {
    it('exposes articles as an object', () => {
        const articles = api.getArticles()
        const articleID = data.articles[0].id
        const articleTitle = data.articles[0].title

        expect(articles).toHaveProperty(articleID)
        expect(articles[articleID].title).toBe(articleTitle)
    })

    it('exposes authors as an object', () => {
        const authors = api.getAuthors()
        const authorID = data.authors[0].id
        const authorFirstName = data.authors[0].firstName

        expect(authors).toHaveProperty(authorID)
        expect(authors[authorID].firstName).toBe(authorFirstName)
    })
})