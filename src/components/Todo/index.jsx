/// <reference path="../../typings/react/react-global.d.ts" />
var React = require("react");
var TodoList = require("../TodoList");
require("./index.css");

module.exports = React.createClass({
    getInitialState: function () {
        return {
            itemList: [{ text: "111" ,select:false}, { text: "222" ,select:false}, { text: "333" ,select:false}, { text: "444" ,select:false}, { text: "555",select:false }, { text: "666",select:false }],
            
        };
    },
    render: function () {
        return (<TodoList  itemlist={this.state.itemList} add={this.add} delete={this.delete} edit={this.edit} select={this.select} selectAll={this.selectAll}/>);
    },
    add: function (o) {
        var newArr = this.state.itemList;
        newArr.push(o);
        this.setState({
            itemList: newArr
        });
    },
    delete: function (index) {
        var newArr = this.state.itemList;
        newArr.splice(index, 1);
        this.setState({
            itemList: newArr
        });
    },
    edit: function (index, text) {
        var newArr = this.state.itemList;
        newArr[index].text = text;
        this.setState({
            itemList: newArr
        });
    },
    select:function(index){
        var newArr = this.state.itemList;
        newArr[index].select = !newArr[index].select;
        this.setState({
            itemList:newArr
        });
    },
    selectAll:function(){
        var newArr = this.state.itemList;
        for(var i =0;i<newArr.length;i++){
            if(newArr[i].select){
                newArr.splice(i,1);
                i--;
            }
        }
        this.setState({
            itemList:newArr
        });
    }
    
});