// <reference path="../../typings/react/react-global.d.ts" />
var React = require("react");
var TodoItem = require("../TodoItem");
require("./index.css");

module.exports = React.createClass({
    render: function () {
        var itemlist = this.props.itemlist;
        var This = this;
        var lis = itemlist.map(function (item, index) {
            return (<TodoItem item={item} key={index} index={index} add={This.props.add} delete={This.props.delete} edit={This.props.edit} select={This.props.select} />);
        });
        return (
            <div className="todo-list">
                <ul>
                    {lis}

                </ul>
                <div className="add-item">
                    <p>
                        <input type="text" ref="input-add" />
                    </p>
                    <p>
                        <button onClick={this.click}>添加</button>
                        <button onClick={this.props.selectAll}>批量删除</button>
                    </p>

                </div>
            </div>

        );
    },
    click: function () {
        var input = this.refs["input-add"];
        var o = {
            text: input.value
        }
        this.props.add(o);
        input.value = "";
    }
});