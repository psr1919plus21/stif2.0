export const SET_CHANNELS = 'SET_CHANNELS';

const initialState = {
    items: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHANNELS:
            return {...state, items: action.payload.channels};

        default:
            return state;
    }
}
