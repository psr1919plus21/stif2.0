import axios from 'axios';

const API_KEY = '956918925cff4bbf971eb06f42e34b20';

const urls = {
    sources: 'https://newsapi.org/v1/sources?language=en'
}

export const API = {
    getChannels: function() {
        return axios.get(urls.sources);
    }
}
