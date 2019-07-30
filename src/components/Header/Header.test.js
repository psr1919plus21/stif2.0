import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';

describe('Header', () => {
    it('should render Header component', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.hasClass('header')).to.equal(true);
    });

    it('should render component in left slot', () => {
        const wrapper = mount(<Header leftSlot={ <TestComponentLeft />} />);

        expect(wrapper.exists('.header__slot_left .left-component')).to.equal(true);
    });

    it('should render component in right slot', () => {
        const wrapper = mount(<Header rightSlot={ <TestComponentRight />} />);

        expect(wrapper.exists('.header__slot_right .right-component')).to.equal(true);
    });

    it('should render components in both left and right slots', () => {
        const wrapper = mount(
            <Header
                leftSlot={ <TestComponentLeft />}
                rightSlot={ <TestComponentRight />}
            />);

        expect(wrapper.exists('.header__slot_left .left-component')).to.equal(true);
        expect(wrapper.exists('.header__slot_right .right-component')).to.equal(true);
    });
});

function TestComponentLeft() {
    return (
        <div className="left-component" />
    );
}

function TestComponentRight() {
    return (
        <div className="right-component" />
    );
}
