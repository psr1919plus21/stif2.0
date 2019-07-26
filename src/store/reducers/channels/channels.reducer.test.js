import { expect } from 'chai';

import channelsReducer, {
    initialState,
    SET_CHANNELS,
    SET_CURRENT_CHANNEL,
    SET_CHANNELS_DEFAULT,
    TOGGLE_CHANNEL_STATUS,
} from './index';

describe('Store', () => {
    describe('Channels reducer', () => {
        it('should return initial state', () => {
            expect(channelsReducer(undefined, {})).to.deep.equal(initialState);
        });

        it('should handle SET_CHANNELS', () => {
            const expectedState = {
                items: [{ foo: 1 }, { bar: 2 }],
                currentChannel: null,
            };

            const actualState = channelsReducer(undefined, {
                type: SET_CHANNELS,
                payload: {
                    channels: [{ foo: 1 }, { bar: 2 }],
                }
            });

            expect(actualState).to.deep.equal(expectedState);
        });

        it('should handle SET_CHANNELS_DEFAULT', () => {
            const previousState = {
                items: [{ foo: 1 }, { bar: 2 }],
                currentChannel: null,
            };

            const expectedState = {
                items: [{ foo: 1, isActive: true }, { bar: 2, isActive: true }],
                currentChannel: { foo: 1, isActive: true },
            };

            const actualState = channelsReducer(previousState, {
                type: SET_CHANNELS_DEFAULT,
            });

            expect(actualState).to.deep.equal(expectedState);
        });

        it('should handle SET_CURRENT_CHANNEL', () => {
            const previousState = {
                items: [{ foo: 1 }, { bar: 2 }],
                currentChannel: null,
            };

            const expectedState = {
                items: [{ foo: 1 }, { bar: 2 }],
                currentChannel: { foo: 1 },
            };

            const actualState = channelsReducer(previousState, {
                type: SET_CURRENT_CHANNEL,
                payload: {
                    newCurrentChannel: { foo: 1 },
                }
            });

            expect(actualState).to.deep.equal(expectedState);
        });

        it('should handle TOGGLE_CHANNEL_STATUS', () => {
            const previousState = {
                items: [{ id: 1, foo: 1, isActive: true }],
                currentChannel: null,
            };

            const expectedState = {
                items: [{ id: 1, foo: 1, isActive: false }],
                currentChannel: null,
            };

            const actualState = channelsReducer(previousState, {
                type: TOGGLE_CHANNEL_STATUS,
                payload: {
                    channelId: 1,
                }
            });

            expect(actualState).to.deep.equal(expectedState);
        });
    });
});

