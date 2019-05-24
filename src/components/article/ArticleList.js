import React, {PureComponent} from 'react'
import Article from './Article'
import articles from './fixtures'

export default class ArticleList extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const articleElements = this.props.articles.map((article, index) =>
            <li key = {article.id}>
                <Article article = {article}/>
            </li>
        )


        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}