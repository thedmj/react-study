import React from 'react';
import "./index.css";
import { Upload, message} from 'antd';
import $ from "jquery";
var Menu =React.createClass({

    render:function(){
        var style={
            display:this.props.showMenu?"block":"none",
            left:this.props.position.x,
            top:this.props.position.y
        }
        var url ='http://101.200.129.112:9527/file/upload/';
        const props = {
        name: 'cloud',
        action: url,
        showUploadList:false,
        headers: {
            authorization: 'authorization-text',
        },
        data:{
            path:this.props.filelist.state.path.replace(/^\//,""),
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
            console.log(info);  
            }
            if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    console.log(props.data.path);

        return (
            <div className="menu" style={style} >
                <ul>
                    <li style={{display:!!this.props.selectedItemName?"none":"block"}} onMouseDown={this.props.newfolder}>新建文件夹</li>
                    <li style={{display:!!this.props.selectedItemName?"block":"none"}} onMouseDown={this.copy}>复制</li>
                    <li style={{display:!!this.props.selectedItemName?"block":"none"}} onMouseDown={this.cut}>剪切</li>
                    <li style={{display:!!this.props.filelist.state.copyItem||!!this.props.filelist.state.cutItem?"block":"none"}} onMouseDown={this.props.onpaste}>粘贴</li>
                    <li style={{display:!!this.props.selectedItemName?"block":"none"}} onMouseDown={this.props.delete}>删除</li>
                    <li style={{display:!!this.props.selectedItemName?"block":"none"}} onMouseDown={this.props.onrename}>重命名</li>
                    <li style={{display:!!this.props.selectedItemName?"none":"block"} } onMouseDown={this.onupload}>
                        <Upload {...props} ref="file">
                            <div  id="selectfile">
                            上传
                            </div>
                        </Upload>
                    </li>
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
    onupload:function(){
       
        
        $("#selectfile").click();
    }
    
    
});
module.exports = Menu;