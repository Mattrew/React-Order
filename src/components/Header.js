import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header-border-top">
                <p>{this.props.name}</p>
                <img alt={this.props.name} src={this.props.imgSrc} className="Header-box-image" ></img>
            </div>
        );
    }
}

export default Header;
