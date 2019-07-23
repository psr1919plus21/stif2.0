import { API } from '../../../api/api';
import { SET_CHANNELS, SET_CHANNELS_DEFAULT } from './index';

export const getChannels = () => {
    return (dispatch) => {
        return API.getChannels()
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
};

export const setChannelsDefault = (payload) => {
    return {
        type: SET_CHANNELS_DEFAULT,
    }
}
