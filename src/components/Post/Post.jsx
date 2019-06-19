import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

function Post(props) {
    return (
        <article className="post">
            <div className="post__content">
                <a className="post__link" href={props.url} target="_blank" rel="noopener noreferrer">
                    <header className="post__header">
                        <h2 className="post__title">{props.title}</h2>
                    </header>
                    <img src={props.imgUrl} alt={props.title} className="post__img"/>
                    <p className="post__description">{props.description}</p>
                </a>
            </div>
        </article>
    );

}

export default Post;
