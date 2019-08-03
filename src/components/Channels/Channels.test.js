import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Channels } from './Channels';
import { channels } from './stubs';

let state = {
    channels: {
        items: channels,
        currentChannel: channels[0],
    }
};

let wrapper;

describe('Channels component', () => {
    beforeEach(() => {
        wrapper = shallow(
            <Channels
                channels={channels}
                currentChannel={channels[0]}
                setCurrentChannel={(newChannel) => { state.channels.currentChannel = newChannel }}
            />
        );
    });

    it('should render correctly', () => {
        expect(wrapper.exists('.channels')).to.equal(true);
    });

    it('should render 3 channels items', () => {
        expect(wrapper.find('.channels__item').length).to.equal(3);
    });

    it('should render correct channel name', () => {
        const firstActiveChannel = wrapper.find('.channels__item').at(1);

        expect(firstActiveChannel.text()).to.equal(state.channels.items[0].name);
    });


    it('should have active class on active channel node', () => {
        const activeChannel = wrapper.find('.channels__item_active');

        expect(activeChannel.text()).to.equal(state.channels.currentChannel.name);
    });

    it('should change active channel by click', () => {
        const secondChannel = wrapper.find('.channels__item').at(2);
        secondChannel.simulate('click');
        wrapper.setProps({currentChannel: state.channels.currentChannel});

        expect(wrapper.find('.channels__item').at(2).hasClass('channels__item_active')).to.equal(true);
    });

    it('should toggle isChannelsControlActive by channels control button click', () => {
        const channelsButtonAdd = wrapper.find('.channels__button_add');

        expect(wrapper.state()).to.deep.equal({ isChannelsControlActive: false });

        channelsButtonAdd.simulate('click');

        expect(wrapper.state()).to.deep.equal({ isChannelsControlActive: true });
    });
});
