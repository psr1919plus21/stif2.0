import { expect } from 'chai';

import feedReducer, {
    initialState,
    SET_POSTS,
} from '../';

describe('Store', () => {
    describe('Feed reducer', () => {
        it('should return initial state', () => {
            expect(feedReducer(undefined, {})).to.deep.equal(initialState);
        });

        it('shold handle SET_POSTS', () => {
            const expectedState = {
                items: [{foo: 1}, {bar: 2}],
            };

            const actualState = feedReducer({ items: [] }, {
                type: SET_POSTS,
                payload: {
                    posts: [{foo: 1}, {bar: 2}],
                }
            });

            expect(expectedState).to.deep.equal(actualState);
        });
    });
});
