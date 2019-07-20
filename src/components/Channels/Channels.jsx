import React, { Component } from 'react';

import ChannelsControl from '../ChannelsControl/ChannelsControl';
import { UTILS } from '../../utils/utils';

import './channels.scss';

export default class Channels extends Component {

    state = {
        isChannelsControlActive: false,
    };

    render() {
        const { channels } = this.props;
        const { isChannelsControlActive } = this.state;

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
                        // TODO: Тут должны подставляться каналы, которые выбрал юзер
                        channels.slice(0, 3).map(channel => {
                            return (
                                <div key={channel.id} className="channels__item">
                                    <button className="channels__button">{channel.name}</button>
                                </div>
                            );
                        })
                    }
                </div>

                {/*<div>Channels search</div>*/}
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
