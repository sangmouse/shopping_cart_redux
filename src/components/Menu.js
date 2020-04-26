import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <div className="menu">
            <div className="body">
                <ul className="list">
                    <li>
                        <a className="link" href=" ">Home Page</a>
                    </li>
                    <li>
                        <a className="link" href=" ">Shopping Page</a>
                    </li>
                    <li>
                        <a className="link" href=" ">About us</a>
                    </li>
                    <li>
                        <a className="link" href=" ">Contact us</a>
                    </li>
                </ul>
            </div>
      </div>
    );
  }
}

export default Menu;

