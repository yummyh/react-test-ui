import React from 'react';
import '../style/header.less';

class Header extends React.Component {
    render() {
        return (
            <div className="m-header">{this.props.children}</div>
        )
    }
}
module.exports = Header;