import React, {PureComponent} from 'react'

class Article extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const {article} = this.props

        return (
            <div>
                <div>
                    <h2>{article.title}</h2>
                </div>
                <div>
                    <h6>{article.subtitle}</h6>
                    <p>{article.text}</p>
                </div>
            </div>
        )
    }
}


export default Article