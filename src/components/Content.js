import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    handleClick(dishNo) {
        window.location.href = '/Detail/' + dishNo;
    };
    render() {
        return (
            <div className="Menu-block">
                <img className="Content-box-image" alt={this.props.name} src={this.props.imgSrc}>
                </img>
                <div className="Menu-description">
                    <p>{this.props.name}</p>
                    <div className="Menu-Order" onClick={() => this.handleClick(this.props.dishNo)}>Order</div>
                </div>
            </div>
        );
    }
}

export default Content;
