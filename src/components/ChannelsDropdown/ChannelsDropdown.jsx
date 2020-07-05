import React, { useState } from 'react';

import './ChannelsDropdown.scss';

export default function ChannelsDropdown(props) {
    const { items, onChannelClick } = props;
    
    return (
        <ul className="channels-dropdown">
            {
                items.map(channel => {
                    return (
                        <li key={channel.id}
                            onClick={ () => onChannelClick(channel)}
                            className="channels-dropdown__item">
                                {channel.name}
                        </li>
                    );
                })
            }
        </ul>
    );
}