import axios from 'axios';

const API_KEY = '956918925cff4bbf971eb06f42e34b20';
let urls = {
    sources: 'https://newsapi.org/v1/sources?language=en'
}

export const getChannels = () => {

    return (dispatch) => {
        axios.get(urls.sources)
            .then((response) => {
                dispatch({
                    type: 'DO_THIS',
                    payload: {
                        channels: response.data.sources,
                    },
                });
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }
}
