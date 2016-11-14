import React from 'react';
import "./index.css";
var Menu =React.createClass({

    render:function(){
        var style={
            display:this.props.showMenu?"block":"none",
            left:this.props.position.x,
            top:this.props.position.y
        }
        return (
            <div className="menu" style={style} >
                <ul>
                    <li style={{display:!!this.props.selectedItemName?"none":"block"}} onMouseDown={this.props.newfolder}>新建文件夹</li>
                    <li style={{display:!!this.props.selectedItemName?"block":"none"}} onMouseDown={this.copy}>复制</li>
                    <li style={{display:!!this.props.selectedItemName?"block":"none"}} onMouseDown={this.cut}>剪切</li>
                    <li style={{display:!!this.props.filelist.state.copyItem||!!this.props.filelist.state.cutItem?"block":"none"}} onMouseDown={this.props.onpast}>粘贴</li>
                    <li style={{display:!!this.props.selectedItemName?"block":"none"}} onMouseDown={this.props.delete}>删除</li>
                    <li style={{display:!!this.props.selectedItemName?"block":"none"}} onMouseDown={this.props.onrename}>重命名</li>
                </ul>
            </div>
        );
    },
    copy:function(){
        var item = this.props.filelist.state.selectedItem.item;
        this.props.getCopyItem(item);
    },
    cut:function(){
        var item = this.props.filelist.state.selectedItem.item;
        this.props.getCutItem(item);
    },
    
    
});
module.exports = Menu;