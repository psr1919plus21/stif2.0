import { API } from '../../../api/api';
import { SET_CHANNELS } from './index';

export const getChannels = () => {
    return (dispatch) => {
        API.getChannels()
            .then((response) => {
                dispatch({
                    type: SET_CHANNELS,
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
