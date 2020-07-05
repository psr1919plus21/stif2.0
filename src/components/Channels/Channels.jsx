import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import ChannelsControl from '../ChannelsControl/ChannelsControl';
import ChannelsDropdown from '../ChannelsDropdown/ChannelsDropdown';
import { UTILS } from '../../utils/utils';

import { setCurrentChannel } from '../../store/reducers/channels/actions';

import './channels.scss';

export class Channels extends Component {

    state = {
        isChannelsControlActive: false,
        isChannelsDropdownActive: false,
    };

    render() {
        const { channels, currentChannel, setCurrentChannel } = this.props;
        const { isChannelsControlActive, isChannelsDropdownActive } = this.state;
        const activeChannels = channels.filter(channel => channel.isActive);
        const previewChannels = activeChannels.slice(0, 4);
        const restChannels = activeChannels.slice(4);

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
                        previewChannels.map(channel => {
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
                    {
                        restChannels.length && <div className="channels__item">
                            <button
                                className="channels__button"
                                onClick={this.channelsDropdownToggle}
                                >Еще {restChannels.length}
                            </button>
                            {
                                isChannelsDropdownActive && <ChannelsDropdown 
                                    items={restChannels}
                                    onChannelClick={setCurrentChannel}
                                />
                            }
                        </div>
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

    // TODO: Перенести эту логику в компонент дропдауна, объединив его с кнопкой.
    channelsDropdownToggle = () => {
        const isChannelsDropdownActive = !this.state.isChannelsDropdownActive;
        this.setState({
            isChannelsDropdownActive,
        });
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
};

export default connect(
    mapStateToProps,
    mapActionsToProps,
)(Channels);
