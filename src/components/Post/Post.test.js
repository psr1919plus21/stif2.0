import React from 'react';
import { shallow } from 'enzyme';

import Post from './Post';
import postStub from '../../stubs/post-stub';


it('should render Post component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Post  {...postStub} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


