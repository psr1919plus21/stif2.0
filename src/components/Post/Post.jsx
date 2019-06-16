import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
            url: props.url
        };
    }

    render() {
        return (
            <article className="post">
                <div className="post__content">
                    <a className="post__link" href={this.props.url} target="_blank">
                        <header className="post__header">
                            <h2 className="post__title">{this.state.title}</h2>
                        </header>
                        <img src={this.state.imgUrl} alt={this.state.title} className="post__img"/>
                        <p className="post__description">{this.state.description}</p>
                    </a>
                </div>
            </article>
        );
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};


export default Post;
