/* react实现双向绑定 */
import React from 'react';
import ReactDOM from 'react-dom';
const Component = React.Component;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "3423"
        };
    }
    changeValue(e) {
        let a = e.target.value
        this.setState({value: a})
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this
                    .changeValue
                    .bind(this)}
                    value={this.state.value}/>
                <div>
                    {this.state.value}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>, document.querySelector('.main'));