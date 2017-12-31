import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.less'
const Component = React.Component;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="m">
                <div className="m-header">React-Test-Ui</div>
                <div className="m-continer">
                    <div className="m-sideBar">
                        <ul>
                            <li>layout布局</li>
                        </ul>
                    </div>
                    <div className="m-content">kjhk</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>, document.querySelector('.main'));