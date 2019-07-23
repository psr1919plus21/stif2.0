export const SET_CHANNELS = 'SET_CHANNELS';
export const SET_CHANNELS_DEFAULT = 'SET_CHANNELS_DEFAULT';
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';

const initialState = {
    items: [],
    activeChannels: [],
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
                activeChannels: state.items.slice(0, DEFAULT_CHANNELS_COUNT),
                currentChannel: state.items[0],
            };

        case SET_CURRENT_CHANNEL:
            return {...state, currentChannel: action.payload.newCurrentChannel};

        default:
            return state;
    }
}
