import React from 'react'
import Article from './Article'

const ArticleList = (props) => {
    return (
        <div>
            {
                Object.keys(props.articles).map(key => props.articles[key]).map(article =>
                    <Article
                        key={ article.id }
                        article={ article }
                        store={ props.store }
                    />
                )
            }
        </div>
    )
}

export default ArticleList
