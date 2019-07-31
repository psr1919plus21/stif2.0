import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './utils/stringIncludesPollyfill';


import { toggleChannelStatus } from '../../store/reducers/channels/actions';

import './ChannelsControl.scss';

export class ChannelsControl extends Component {
    state = {
        searchInputValue: '',
        filteredChannels: [],
    };

    constructor(props) {
        super(props);
        this.searchInputRef = React.createRef();
        this.onSearchInput = this.onSearchInput.bind(this);
    }

    componentDidMount() {
        this.filterChannelsBySearch();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (!this.props.isActive && nextProps.isActive) {
            setTimeout(() => {
                this.searchInputRef.current.focus();
                this.filterChannelsBySearch();
            }, 0);
        }
    }

    render() {
        const { channels, isActive } = this.props;
        const { searchInputValue, filteredChannels } = this.state;

        return (
            <div className={classNames('channels-control', {
               'channels-control_active': isActive,
            })}>
                <div className="channels-control__content">

                    <div className="channels-control__search channels-search">
                        <input
                            ref={this.searchInputRef}
                            placeholder="Search"
                            type="text"
                            className="channels-search__input"
                            value={searchInputValue}
                            onChange={this.onSearchInput}
                        />
                    </div>

                    <ul className="channels-control__list channels-list">
                        {
                            filteredChannels.map(channel => {
                                return (
                                    <div
                                        key={channel.id}
                                        className="channels-list__item"
                                        onClick={this.onChannelClick(channel.id)}
                                    >
                                        <h3 className="channels-list__title">{channel.name}</h3>
                                        <p className="channels-list__category">{channel.category}</p>
                                        <div className={classNames({
                                            'channels-control__add': !channel.isActive,
                                            'channels-control__remove': channel.isActive,
                                        })} />
                                    </div>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }

    onChannelClick(channelId) {
        return () => {
            this.props.toggleChannelStatus(channelId);
        }
    }

    onSearchInput(e) {
        this.setState({ searchInputValue: e.target.value.toLowerCase() }, this.filterChannelsBySearch);
    }

    filterChannelsBySearch() {
        const { channels } = this.props;
        const { searchInputValue } = this.state;
        this.setState({ filteredChannels: channels.filter(channel => {
                return channel.name.toLowerCase().includes(searchInputValue);
            })
        });
    }
}

ChannelsControl.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
    return {
        channels: state.channels.items,
    }
}

const mapActionsToProps = {
    toggleChannelStatus,
};


export default connect(mapStateToProps, mapActionsToProps)(ChannelsControl);
