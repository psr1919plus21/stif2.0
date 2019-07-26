import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import { expect } from 'chai'

import channelsStore, { SET_CHANNELS_DEFAULT } from '../../store/reducers/channels/';
import Channels from './Channels';

const channels = [
    {
        "id": "abc-news-au",
        "name": "ABC News (AU)",
        "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        "url": "http://www.abc.net.au/news",
        "category": "general",
        "language": "en",
        "country": "au",
        "urlsToLogos": {
            "small": "",
            "medium": "",
            "large": ""
        },
        "sortBysAvailable": [
            "top"
        ],
        isActive: true,
    }, {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English",
        "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
        "url": "http://www.aljazeera.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
            "small": "",
            "medium": "",
            "large": ""
        },
        "sortBysAvailable": [
            "top"
        ],
        isActive: false,
    }, {
        "id": "Some cool news",
        "name": "Some cool news",
        "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
        "url": "http://www.aljazeera.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
            "small": "",
            "medium": "",
            "large": ""
        },
        "sortBysAvailable": [
            "top"
        ],
        isActive: true,
    }

];

const initialState = {
    channels: {
        items: channels,
        currentChannel: channels[0],
    }
};

const store = createStore(channelsStore, initialState);

describe('Channels component', () => {
    it('should render correctly', () => {
        const wrapper = mount(<Provider store={store}><Channels /></Provider>);

        expect(wrapper.exists('.channels')).to.equal(true);
    });

    it('should render 3 channels items', () => {
        const wrapper = mount(<Provider store={store}><Channels /></Provider>);

        expect(wrapper.find('.channels__item').length).to.equal(3);
    });

    it('should render correct channel name', () => {
        const wrapper = mount(<Provider store={store}><Channels /></Provider>);
        const firstActiveChannel = wrapper.find('.channels__item').at(1);

        expect(firstActiveChannel.text()).to.equal(store.getState().channels.items[0].name);
    });


    it('should have active class on active channel node', () => {
        const wrapper = mount(<Provider store={store}><Channels /></Provider>);
        const activeChannel = wrapper.find('.channels__item_active');

        expect(activeChannel.text()).to.equal(store.getState().channels.currentChannel.name);
    });

    // it.only('should change active channel by click', (done) => {
    //     const wrapper = mount(<Provider store={store}><Channels /></Provider>);
    //     const secondChannel = wrapper.find('.channels__item').at(2);
    //     secondChannel.simulate('click');
    //
    //     console.log(wrapper.find('.channels__item').at(2).html());
    //
    //     setTimeout(() => {
    //         console.log(store.getState());
    //         expect(wrapper.find('.channels__item').at(2).hasClass('channels__item_active')).to.equal(true);
    //         done();
    //     }, 1000)
    //
    // });
});
