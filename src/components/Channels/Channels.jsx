import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChannelsControl from '../ChannelsControl/ChannelsControl';
import { UTILS } from '../../utils/utils';

import './channels.scss';

class Channels extends Component {

    state = {
        isChannelsControlActive: false,
    };

    render() {
        const { channels, activeChannels } = this.props;
        const { isChannelsControlActive } = this.state;
        console.log('activeChannels ', activeChannels);

        return (
            <div className="channels-wrapper">
                <div  className="channels">
                    <div className="channels__item">
                        <button
                            className="channels__button channels__button_add"
                            onClick={this.channelsControlToggle}
                        />
                        <ChannelsControl channels={channels} isActive={isChannelsControlActive} />
                    </div>
                    {
                        activeChannels.map(channel => {
                            return (
                                <div key={channel.id} className="channels__item">
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
        activeChannels: state.channels.activeChannels,
    }
}

export default connect(
    mapStateToProps,
)(Channels);
