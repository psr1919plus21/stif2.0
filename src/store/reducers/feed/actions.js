import { API } from '../../../api/api';

import { SET_POSTS } from './';

export const getPosts = ({ channelId }) => {
    return dispatch => {
        API.getPostsTop({ channelId })
            .then(response => {
                dispatch({
                    type: SET_POSTS,
                    payload: {
                        posts: response.data.articles,
                    }
                });
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    };
};
