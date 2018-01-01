import React from 'react';
import ReactDOM from 'react-dom';
import { Header, SideBar } from '../../src/index.js';
import '../style/style.less'
import { getList } from '../../api/crudDemon.js';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ tableData: props.data })
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>电话</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.tableData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "421412",
            tableData: []
        }
    }
    changeValue(e) {
        let a = e.target.value
        this.setState({ value: a })
    }
    queryData() {
        let code = this.state.value
        getList(code).then(res => {
            this.setState({ tableData: res.data.data })
        });

    }
    render() {
        return (
            <div className="m-content">
                <input
                    type="text"
                    onChange={this
                        .changeValue
                        .bind(this)}
                    value={this.state.value} />
                <button
                    type="button"
                    onClick={this
                        .queryData
                        .bind(this)}>查询</button>
                <button
                    type="button"
                    onClick={this
                        .queryData
                        .bind(this)}>新增</button>
                <Table data={this.state.tableData}></Table>
            </div>
        )
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="m">
                <Header>React-Test-Demo</Header>
                <div className="m-continer">
                    <SideBar></SideBar>
                    <Content></Content>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Main />, document.querySelector('.main'));