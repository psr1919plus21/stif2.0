import React from 'react';
import './Header.scss';

export default class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <div className="header__content">
                    <div className="header__slot header__slot_left">
                        {this.props.leftSlot}
                    </div>
                    <div className="header__slot header__slot_right">
                        {this.props.rightSlot}
                    </div>
                </div>
            </header>
        );
    }
}
