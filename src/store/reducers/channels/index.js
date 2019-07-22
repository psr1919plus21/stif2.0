const initialState = {
    items: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'DO_THIS':
            return {...state, items: action.payload.channels};

        default:
            return state;
    }
}
