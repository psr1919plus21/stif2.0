import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ChannelsControl.scss';

class ChannelsControl extends Component {
    constructor(props) {
        super(props);
        this.searchInputRef = React.createRef();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isActive) {
            setTimeout(() => {
                this.searchInputRef.current.focus();
            }, 0);
        }
    }

    render() {
        const { channels, isActive } = this.props;

        return (
            <div className={classNames('channels-control', {
               'channels-control_active': isActive,
            })}>
                <div className="channels-control__content">

                    <div className="channels-control__search channels-search">
                        <input ref={this.searchInputRef} placeholder="Search" type="text" className="channels-search__input"/>
                    </div>

                    <ul className="channels-control__list channels-list">
                        {
                            channels.map(channel => {
                                return (
                                    <div key={channel.id} className="channels-list__item">
                                        <h3 className="channels-list__title">{channel.name}</h3>
                                        <p className="channels-list__category">{channel.category}</p>
                                        <div className="channels-control__add"></div>
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
