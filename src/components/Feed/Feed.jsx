import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

import './Feed.scss';

class Feed extends Component {
    render() {
        const { posts } = this.props;

        return (
            <ul className='feed'>
                {
                    posts.map((post) => {
                        return (
                            <li className='feed__item' key={Math.floor(Math.random() * 1000)}>
                                <Post {...post} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

Feed.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default Feed;
