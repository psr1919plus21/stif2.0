import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { ChannelsControl } from './ChannelsControl';
import {channels} from "./stubs";

let state = {
    channels,
}
let wrapper;

describe('ChannelsControl', () => {
    beforeEach(() => {
        wrapper = shallow(
            <ChannelsControl
                channels={state.channels}
                isActive={true}
                toggleChannelStatus={toggleChannel}
            />
        );
    });

    it('should render correctly', () => {
        expect(wrapper.exists('.channels-control')).to.equal(true);
    });

    it('should render 3 channels', () => {
        expect(wrapper.find('.channels-list__item').length).to.equal(3);
    });

    it('should toggle channel status', () => {
        const firstChannel = wrapper.find('.channels-list__item').at(0);

        expect(state.channels[0].isActive).to.equal(true);

        firstChannel.simulate('click');

        expect(state.channels[0].isActive).to.equal(false);
    });

    it('should filter channels by search', () => {
        const searchInput = wrapper.find('.channels-search__input');
        searchInput.simulate('change', { target: { value: 'Some cool'} });
        const findedChannelTitle = wrapper.find('.channels-list__item').at(0)
            .find('.channels-list__title');

        expect(wrapper.find('.channels-list__item').length).to.equal(1);
        expect(findedChannelTitle.text()).to.equal('Some cool news');
    });

    it('should case independent filter channels by search', () => {
        const searchInput = wrapper.find('.channels-search__input');
        searchInput.simulate('change', { target: { value: 'some cool'} });
        const findedChannelTitle = wrapper.find('.channels-list__item').at(0)
            .find('.channels-list__title');

        expect(wrapper.find('.channels-list__item').length).to.equal(1);
        expect(findedChannelTitle.text()).to.equal('Some cool news');
    });
});

function toggleChannel(channelId) {
    state.channels = state.channels.map(channel => {
        if (channel.id === channelId) {
            channel.isActive = !channel.isActive;
        }

        return channel;
    });
}
