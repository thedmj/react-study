// <reference path="../../typings/react/react-global.d.ts" />
var React = require("react");


module.exports = React.createClass({
    componentDidMount: function () {

    },
    getInitialState: function () {
        return {
            show: false,
            select: false
        }
    },
    render: function () {
        var text = this.props.item.text;
        var This = this;

        var style = { display: this.state.show ? "block" : "none" };
        return (
            <li className="todo-item" key={this.props.item.key} ref="li" style={{ background: this.props.item.select ? "#ccc" : "none" }}>
                <div className="text">
                    <p>{text}</p>
                </div>
                <div className="btn-right-contain">
                    <button onClick={this.deleteHandle} data-index={(function () {
                        return This.props.index.toString();
                    })()} className="btn-delete">删除</button>
                    <button data-index={(function () {
                        return This.props.index.toString();
                    })()} onClick={this.toggleShow} className="btn-edit">修改</button>
                    <button data-index={(function () {
                        return This.props.index.toString();
                    })()} onClick={this.select} className="btn-select">选中</button>
                </div>


                <div className="edit" style={style}>
                    <p>
                        <input type="text" ref="input-edit" />
                    </p>
                    <p>
                        <button onClick={this.editHandle} data-index={(function () {
                            return This.props.index.toString();
                        })()} className="edit-ok">确定
                        </button>
                        <button data-index={(function () {
                            return This.props.index.toString();
                        })()} onClick={this.cannel} className="edit-cannel">取消
                        </button>
                    </p>


                </div>
            </li>);
    },
    deleteHandle: function (e) {
        this.props.delete(e.target.dataset.index);
    },
    editHandle: function (e) {
        var index = e.target.dataset.index;
        var text = this.refs["input-edit"].value;
        this.props.edit(index, text);
        this.cannel();
        

    },
    toggleShow: function () {
        this.setState({
            show: !this.state.show
        });
    },
    cannel: function () {
        this.refs["input-edit"].value = "";
        this.setState({
            show: false
        });
    },
    select: function (e) {
        var index = e.target.dataset.index;
        this.props.select(index);
    }

});