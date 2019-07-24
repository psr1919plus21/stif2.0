import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import ChannelsControl from '../ChannelsControl/ChannelsControl';
import { UTILS } from '../../utils/utils';

import { setCurrentChannel } from '../../store/reducers/channels/actions';

import './channels.scss';

class Channels extends Component {

    state = {
        isChannelsControlActive: false,
    };

    render() {
        const { channels, currentChannel, setCurrentChannel } = this.props;
        const { isChannelsControlActive } = this.state;
        const activeChannels = channels.filter(channel => channel.isActive);

        return (
            <div className="channels-wrapper">
                <div  className="channels">
                    <div className="channels__item">
                        <button
                            className="channels__button channels__button_add"
                            onClick={this.channelsControlToggle}
                        />
                        <ChannelsControl isActive={isChannelsControlActive} />
                    </div>
                    {
                        activeChannels.map(channel => {
                            return (
                                <div
                                    key={channel.id}
                                    onClick={ () => setCurrentChannel(channel) }
                                    className={
                                        classnames('channels__item', {
                                            'channels__item_active': channel.id === currentChannel.id
                                        })
                                    }
                                >
                                    <button className="channels__button">{channel.name}</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    channelsControlToggle = () => {
        const isChannelsControlActive = !this.state.isChannelsControlActive;
        this.setState({
            isChannelsControlActive,
        });

        UTILS.setNoScroll(isChannelsControlActive);
    }
}

function mapStateToProps(state) {
    return {
        channels: state.channels.items,
        currentChannel: state.channels.currentChannel,
    }
}

const mapActionsToProps = {
    setCurrentChannel,
}

export default connect(
    mapStateToProps,
    mapActionsToProps,
)(Channels);
