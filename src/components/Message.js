import React, { Component } from 'react';

class Message extends Component {


    render() {

        var {message} = this.props

        return (
            <div className="message">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>{message}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;

