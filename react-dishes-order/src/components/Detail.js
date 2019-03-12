import React, { Component } from 'react';
import './Detail.css';
import '../const/Const';

class Detail extends Component {
    render() {
        return (
            <div className="Detail">
                <div className="Detail-header">
                    <img className="Detail-header-img" src={require('../' + globalThis.imgMap[this.props.match.params.dishNo] + '.jpg')}
                    alt={this.props.match.params.dishNo}></img>
                </div>
            </div>
        );
    }
}

export default Detail;
