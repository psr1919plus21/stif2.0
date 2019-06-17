import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Post from './Post';
import postStub from '../../stubs/post-stub';


describe('Post component', function() {
    it('should render wrapper', () => {
        const wrapper = shallow(<Post  {...postStub} />);
        expect(wrapper.exists('.post__content')).to.equal(true);
    });

    it('should contain external url', () => {
        const wrapper = mount(<Post  {...postStub} />);
        const postLink = wrapper.find('.post__link').getDOMNode();

        expect(postLink.href).to.equal(postStub.url);
    });

    it('should open news in new tab', () => {
        const wrapper = mount(<Post  {...postStub} />);
        const postLink = wrapper.find('.post__link').getDOMNode();

        expect(postLink.target).to.equal('_blank');
    });

    it('should render correct title', () => {
        const wrapper = shallow(<Post  {...postStub} />);
        const titleText = wrapper.find('.post__title').text();

        expect(titleText).to.equal(postStub.title);
    });

    it('should render news image', () => {
        const wrapper = mount(<Post  {...postStub} />);
        const newsImg = wrapper.find('.post__img').getDOMNode();

        expect(newsImg.src).to.equal(postStub.imgUrl);
    });

    it('should contains alt text on image', () => {
        const wrapper = mount(<Post  {...postStub} />);
        const newsImg = wrapper.find('.post__img').getDOMNode();

        expect(newsImg.alt).to.equal(postStub.title);
    });

    it('should render news description', () => {
        const wrapper = shallow(<Post  {...postStub} />);
        const descriptionText = wrapper.find('.post__description').text()

        expect(descriptionText).to.equal(postStub.description);
    });
});




