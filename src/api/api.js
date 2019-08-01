import axios from 'axios';

const API_KEY = '956918925cff4bbf971eb06f42e34b20';

const urls = {
    sources: `https://newsapi.org/v2/sources?language=en`,
    postsTop: `https://newsapi.org/v2/top-headlines`
}

export const API = {
    getChannels: function() {
        return axios.get(urls.sources, {
            headers: {
                'X-Api-Key': API_KEY,
            }
        });
    },

    getPostsTop: function({ channelId }) {
        return axios.get(urls.postsTop + `/?sources=${channelId}`,{
            headers: {
                'X-Api-Key': API_KEY,
            }
        });
    }
}
