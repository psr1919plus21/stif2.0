import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../Post/Post';

import './Feed.scss';

export class Feed extends Component {
    render() {
        const { posts } = this.props;

        return (
            <ul className='feed'>
                {
                    posts.map((post) => {
                        return (
                            // url в качестве ключа потому, что в v2 API у статей нет айдишников
                            <li className='feed__item' key={post.url}>
                                <Post {...post} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.feed.items,
    }
}

export default connect(mapStateToProps)(Feed);
