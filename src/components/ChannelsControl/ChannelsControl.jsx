import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ChannelsControl.scss';

class ChannelsControl extends Component {
    render() {
        const { channels, isActive } = this.props;

        return (
            <div className={classNames('channels-control', {
               'channels-control_active': isActive,
            })}>
                <div className="channels-control__content">

                    <div className="channels-control__search channels-search">
                        <input placeholder="Search" type="text" className="channels-search__input"/>
                    </div>

                    <ul className="channels-control__list channels-list">
                        {
                            channels.map(channel => {
                                return (
                                    <div key={channel.id} className="channels-list__item">
                                        {channel.name}
                                    </div>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }
}

ChannelsControl.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default ChannelsControl;
