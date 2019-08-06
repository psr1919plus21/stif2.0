import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import { expect } from 'chai';


import { getPosts } from '../actions';
import { SET_POSTS } from '../';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Store', () => {
    describe('Feed actions', () => {
        it('should return correct SET_POSTS action', (done) => {
            const mockAxios = new MockAdapter(axios);
            const responceData = {
                articles: [
                    { foo: 1, url: 'hello.com' },
                    { bar: 2, url: 'world.org' },
                ],
            };

            mockAxios.onGet('https://newsapi.org/v2/top-headlines/?sources=my-cool-channel')
                .reply(200, responceData);

            const store = mockStore({});
            const expectedAction = {
                type: SET_POSTS,
                payload: {
                    posts: [
                        { foo: 1, url: 'hello.com' },
                        { bar: 2, url: 'world.org' },
                    ],
                },
            };

            return store.dispatch(getPosts({ channelId: 'my-cool-channel' })).then(() => {
                expect(store.getActions()[0]).to.deep.equal(expectedAction);
                    done();
                });
        });
    });
});
