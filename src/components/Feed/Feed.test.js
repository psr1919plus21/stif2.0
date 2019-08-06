import React from 'react';

import { shallow, mount } from 'enzyme';
import { expect } from 'chai'

import { Feed } from "../Feed/Feed";
import feedStub from "../../stubs/feed-stub";

describe('Feed component', () => {
    it('should render feed component', () => {
        const wrapper = shallow(<Feed posts={feedStub} />);
        expect(wrapper.hasClass('feed')).to.equal(true);
    });

    it('should render feed items', () => {
        const wrapper = mount(<Feed posts={feedStub} />);
        expect(wrapper.find('.feed__item')).to.be.lengthOf(feedStub.length);
    });

    it('should render Post components', () => {
        const wrapper = mount(<Feed posts={feedStub} />);
        expect(wrapper.find('.post')).to.be.lengthOf(feedStub.length);
    });
});
