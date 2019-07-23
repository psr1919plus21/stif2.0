import React, { Component, } from 'react';
import { connect } from 'react-redux';

import feedStub from '../../stubs/feed-stub';

import { getChannels, setChannelsDefault } from '../../store/reducers/channels/actions';

import './App.scss';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Feed from '../Feed/Feed';
import Channels from '../Channels/Channels';

import channels from '../../stubs/channels-stub';

class App extends Component {
    componentWillMount() {
        const { getChannels, setChannelsDefault } = this.props;

        this.props.getChannels()
            .then(() => {
                setChannelsDefault();
            });
    }

    render() {
      return (
          <div className="stif">
              <Header
                  leftSlot={ <Logo /> }
                  rightSlot={ <Channels  channels={channels}/> }
              />

              {/* Temp wrapper, will be replaced with content component */}
              <div className="content">
                  <div className="container">
                      <Feed posts={feedStub}/>
                  </div>
              </div>
          </div>
      );
    }
}

const mapActionsToProps = {
    getChannels,
    setChannelsDefault,
};

export default connect(
    null,
    mapActionsToProps,
)(App);
