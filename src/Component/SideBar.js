import React from 'react';
import '../style/siderBar.less';
import {MenuItem} from '../index.js';

class SideBar extends React.Component {
    render() {
        return (
            <div className="m-sideBar">
                <ul>
                    <MenuItem>{this.props.children}</MenuItem>
                </ul>
            </div>
        )
    }
}
module.exports = SideBar;