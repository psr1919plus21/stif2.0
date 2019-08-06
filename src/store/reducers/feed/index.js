export const SET_POSTS = 'SET_POSTS';

export const initialState = {
    items: [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_POSTS:
            return {...state, items: action.payload.posts};

        default:
            return state;
    }
}
