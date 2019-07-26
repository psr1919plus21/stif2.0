export const SET_CHANNELS = 'SET_CHANNELS';
export const SET_CHANNELS_DEFAULT = 'SET_CHANNELS_DEFAULT';
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';
export const TOGGLE_CHANNEL_STATUS = 'TOGGLE_CHANNEL_STATUS';

export const initialState = {
    items: [],
    currentChannel: null,
};

const DEFAULT_CHANNELS_COUNT = 3;

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHANNELS:
            return {...state, items: action.payload.channels};

        case SET_CHANNELS_DEFAULT:
            return {
                ...state,
                items: state.items.map((channel, index) => {
                    if (index < DEFAULT_CHANNELS_COUNT) {
                        channel.isActive = true;
                    }

                    return channel;
                }),
                currentChannel: state.items[0],
            };

        case SET_CURRENT_CHANNEL:
            return {...state, currentChannel: action.payload.newCurrentChannel};

        case TOGGLE_CHANNEL_STATUS:
            return {
                ...state,
                items: state.items.map(channel => {
                    if (channel.id === action.payload.channelId) {
                        channel.isActive = !channel.isActive;
                    }
                    return channel;
                })
            };

        default:
            return state;
    }
}
