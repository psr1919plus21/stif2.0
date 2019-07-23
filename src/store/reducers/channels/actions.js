import { API } from '../../../api/api';
import { SET_CHANNELS, SET_CHANNELS_DEFAULT, SET_CURRENT_CHANNEL } from './index';

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

export const setChannelsDefault = () => {
    return {
        type: SET_CHANNELS_DEFAULT,
    }
};

export const setCurrentChannel = (newCurrentChannel) => {
    return {
        type: SET_CURRENT_CHANNEL,
        payload: {
            newCurrentChannel,
        }
    }
}
