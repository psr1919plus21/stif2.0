import { API } from '../../../api/api';
import {
    SET_CHANNELS,
    SET_CHANNELS_DEFAULT,
    SET_CURRENT_CHANNEL,
    TOGGLE_CHANNEL_STATUS,
} from './index';

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
    console.log('------------------SET');
    return {
        type: SET_CURRENT_CHANNEL,
        payload: {
            newCurrentChannel,
        }
    }
};

export const toggleChannelStatus = (channelId) => {
    return {
        type: TOGGLE_CHANNEL_STATUS,
        payload: {
            channelId,
        }
    }
};
