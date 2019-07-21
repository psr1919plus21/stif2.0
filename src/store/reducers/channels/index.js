const initialState = {
    items: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'DO_THIS':
            return {...state, items: [1, 2, 3]};

        default:
            return state;
    }
}
