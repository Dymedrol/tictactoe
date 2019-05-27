import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from './fixtures'

class List extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ArticleList articles = {articles}/>
                <div>Загрузить еще</div>
            </div>
        )
    }
}

export default List