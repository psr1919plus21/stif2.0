import React, { Component } from 'react';

import ChannelsControl from '../ChannelsControl/ChannelsControl';

import './channels.scss';

export default class Channels extends Component {
    render() {
        const { channels } = this.props;

        return (
            <div className="channels-wrapper">
                <div  className="channels">
                    <div className="channels__item">
                        <button className="channels__button channels__button_add"></button>
                        <ChannelsControl channels={channels} />
                    </div>
                    {
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
}
