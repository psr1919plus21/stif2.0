import { combineReducers } from 'redux';
import channels from './channels/';
import feed from './feed/';

export default combineReducers({
    channels,
    feed,
});
