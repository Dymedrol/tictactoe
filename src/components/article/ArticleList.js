import React, {PureComponent} from 'react'
import Article from './Article'
import articles from './fixtures'

export default class ArticleList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            visible: 2,
            error: false
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 2};
        });
    }

    render() {
        const articleElements = this.props.articles.slice(0, this.state.visible).map((article, index) =>
            <li key = {article.id}>
                <Article article = {article}/>
            </li>
        )

        return (
            <ul>
                {articleElements}
                <button onClick={this.loadMore} type="button">Load more</button>
            </ul>
        )
    }
}