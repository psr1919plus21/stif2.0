import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';

import {
    SET_CHANNELS_DEFAULT,
    SET_CURRENT_CHANNEL,
    TOGGLE_CHANNEL_STATUS,
    SET_CHANNELS,
} from '../index';

import {
    setChannelsDefault,
    setCurrentChannel,
    toggleChannelStatus,
    getChannels,
} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Store', () => {
    describe('Channels actions', () => {
        it('should return correct SET_CHANNELS_DEFAULT action', () => {
            const expectedAction = {
                type: SET_CHANNELS_DEFAULT,
            };
            const actualAction = setChannelsDefault();

            expect(expectedAction).to.deep.equal(actualAction);
        });

        it('should return correct SET_CURRENT_CHANNEL action', () => {
            const expectedAction = {
                type: SET_CURRENT_CHANNEL,
                payload: {
                    newCurrentChannel: { name: 'my awesome channel'},
                }
            };
            const actualAction = setCurrentChannel({ name: 'my awesome channel' });

            expect(expectedAction).to.deep.equal(actualAction);
        });

        it('should return correct TOGGLE_CHANNEL_STATUS action', () => {
            const expectedAction = {
                type: TOGGLE_CHANNEL_STATUS,
                payload: {
                    channelId: 42,
                }
            };
            const actualAction = toggleChannelStatus(42);

            expect(expectedAction).to.deep.equal(actualAction);
        });

        it('should return correct SET_CHANNELS action', (done) => {
            const mockAxios = new MockAdapter(axios);
            const responseData = {
                sources: [{ foo: 1, bar: 2}],
            };

            mockAxios.onGet('https://newsapi.org/v1/sources?language=en')
                .reply(200, responseData);

            const store = mockStore({ items: [] });
            const expectedAction = {
                type: SET_CHANNELS,
                payload: {
                    channels: [{ foo: 1, bar: 2}],
                }
            };

            return store.dispatch(getChannels()).then(() => {
                expect(store.getActions()[0]).to.deep.equal(expectedAction);
                done();
            })
        });
    });
});
