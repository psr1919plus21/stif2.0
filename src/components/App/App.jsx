import React, { Component, } from 'react';
import { connect } from 'react-redux';

import { getChannels, setChannelsDefault } from '../../store/reducers/channels/actions';
import { getPosts} from '../../store/reducers/feed/actions';

import './App.scss';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Feed from '../Feed/Feed';
import Channels from '../Channels/Channels';

class App extends Component {
    componentWillMount() {
        const { setChannelsDefault } = this.props;

        this.props.getChannels()
            .then(() => {
                setChannelsDefault();
            });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { getPosts } = this.props;

        if (nextProps.currentChannel) {
            getPosts({ channelId: nextProps.currentChannel.id });
        }
    }

    render() {
        const { currentChannel } = this.props;

        return (
            <div className="stif">
                <Header
                  leftSlot={ <Logo /> }
                  rightSlot={ <Channels /> }
                />

                {/* Temp wrapper, will be replaced with content component */}
                <div className="content">
                    <div className="container">
                        <h1 className="channel-name">{currentChannel && currentChannel.name}</h1>
                        <Feed />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentChannel: state.channels.currentChannel
    };
}

const mapActionsToProps = {
    getPosts,
    getChannels,
    setChannelsDefault,
};

export default connect(
    mapStateToProps,
    mapActionsToProps,
)(App);
