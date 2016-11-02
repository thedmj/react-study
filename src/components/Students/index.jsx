import React from 'react';
import { Table, Button, Modal, Form, Input, Radio, message } from 'antd';
var RadioGroup = Radio.Group;
var RadioButton = Radio.Button;
var FormItem = Form.Item;
import request from "superagent";
require("antd/dist/antd.css");

var columns = [{ title: "id", dataIndex: "id" }, { title: "姓名", dataIndex: "name", key: "name" }, { title: "年龄", dataIndex: "age", key: "age" }, { title: "性别", dataIndex: "sex", key: "sex" }, { title: "single", dataIndex: "single", render: (single, o) => (<div>{single ? "单身狗" : "恩爱狗"}</div>) }, {
  title: "action", render: (text, record) => (<span>{text.age}</span>),
  key: 'action'
}];
var data = [{ id: 1, name: "aaa", age: 1, sex: "boy", single: true }, { id: 2, name: "aaa", age: 1, sex: "boy", single: true }, { id: 3, name: "aaa", age: 1, sex: "boy", single: true }, { id: 4, name: "aaa", age: 1, sex: "boy", single: true }, { id: 5, name: "aaa", age: 1, sex: "boy", single: true }, { id: 6, name: "aaa", age: 1, sex: "boy", single: true }, { id: 7, name: "aaa", age: 1, sex: "boy", single: true }, { id: 8, name: "aaa", age: 1, sex: "boy", single: true }, { id: 9, name: "aaa", age: 1, sex: "boy", single: true }, { id: 10, name: "aaa", age: 1, sex: "boy", single: true }, { id: 11, name: "aaa", age: 1, sex: "boy", single: true }, { id: 12, name: "aaa", age: 1, sex: "boy", single: true }, { id: 13, name: "aaa", age: 1, sex: "boy", single: true }, { id: 14, name: "aaa", age: 1, sex: "boy", single: true }, { id: 15, name: "aaa", age: 1, sex: "boy", single: true }, { id: 16, name: "aaa", age: 1, sex: "boy", single: true }, { id: 17, name: "aaa", age: 1, sex: "boy", single: true }, { id: 18, name: "aaa", age: 1, sex: "boy", single: true }, { id: 19, name: "aaa", age: 1, sex: "boy", single: true }, { id: 20, name: "aaa", age: 1, sex: "boy", single: true }];

var url = "http://101.200.129.112:9527/react1/student/";


var Students = (React.createClass({
  getInitialState: function () {
    data = data.map(function (o) {
      o.key = o.id;
      return o;
    });
    return {
      data: data,
      loading: false,
      showAdd: false,
      showDelete: false,
      showEdit: false,
      addInfo: {
        name: "",
        age: "",
        sex: "boy",
        single: true
      },
      selectedID: null,
      selectedIndex: null,
      selectedItem: {
        name: "",
        age: "",
        sex: "boy",
        single: true
      }
    }
  },
  render: function () {
    var This = this;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    const rowSelection = {
      type: "radio",
      onChange(selectedRowKeys, selectedRows) {
        This.setState({ selectedID: selectedRows[0].id, selectedIndex: selectedRowKeys, selectedItem: selectedRows[0] });

      },
      onSelect(record, selected, selectedRows) {

      },
      onSelectAll(selected, selectedRows, changeRows) {

      },
    };
    return (
      <div className="dongnao">
        <h1>动脑学院学生信息系统</h1>
        <Button icon="plus" type="primary" onClick={() => { this.setState({ showAdd: true }); } }>增加</Button>&nbsp;
        <Button icon="edit" type="ghost" onClick={this.deleteHandle} disabled={this.state.selectedID ? false : true}>删除</Button>&nbsp;
        <Button icon="delete" type="" onClick={() => { this.setState({ showEdit: true }); } } disabled={this.state.selectedID ? false : true}>修改</Button>
        <br />
        <br />
        <div className="content">
          <Table columns={columns} dataSource={this.state.data} loading={this.state.loading} rowSelection={rowSelection} />
          <Modal visible={this.state.showAdd} title="增加学生信息" onCancel={this.clearForm} onOk={this.add}>
            <Form ref="form" id="form">
              <FormItem label="name" {...formItemLayout}>
                <Input value={this.state.addInfo.name} onChange={(e) => { this.addHandle(e.target.value, "name") } } />
              </FormItem>
              <FormItem label="age" {...formItemLayout}>
                <Input value={this.state.addInfo.age} onChange={(e) => { this.addHandle(e.target.value, "age") } } />
              </FormItem>

              <FormItem label="sex" {...formItemLayout}>
                <RadioGroup value={this.state.addInfo.sex} onChange={(e) => { this.addHandle(e.target.value, "sex") } }>
                  <RadioButton key="boy" value={"boy"}>boy</RadioButton>
                  <RadioButton key="girl" value={"girl"}>girl</RadioButton>

                </RadioGroup>
              </FormItem>
              <FormItem label="single" {...formItemLayout}>
                <RadioGroup value={this.state.addInfo.single} onChange={(e) => { this.addHandle(e.target.value, "single") } }>
                  <Radio key="boy" value={true}>单身狗</Radio>
                  <Radio key="girl" value={false}>恩爱狗</Radio>

                </RadioGroup>
              </FormItem>
            </Form>
          </Modal>
          <Modal title="删除数据" visible={this.state.showDelete} onCancel={() => { this.setState({ showDelete: false }) } } onOk={this.delete}>
            <p>你确定要删除ID号为{this.state.selectedID}的记录？</p>
          </Modal>

          <Modal visible={this.state.showEdit} title="修改学生信息" onCancel={() => { this.setState({ showEdit: false }); } } onOk={this.edit}>
            <Form>
              <FormItem label="name" {...formItemLayout}>
                <Input value={this.state.selectedItem.name} onChange={(e) => { this.editHandle(e.target.value, "name") } } />
              </FormItem>
              <FormItem label="age" {...formItemLayout}>
                <Input value={this.state.selectedItem.age} onChange={(e) => { this.editHandle(e.target.value, "age") } } />
              </FormItem>

              <FormItem label="sex" {...formItemLayout}>
                <RadioGroup value={this.state.selectedItem.sex} onChange={(e) => { this.editHandle(e.target.value, "sex") } }>
                  <RadioButton key="boy" value={"boy"}>boy</RadioButton>
                  <RadioButton key="girl" value={"girl"}>girl</RadioButton>

                </RadioGroup>
              </FormItem>
              <FormItem label="single" {...formItemLayout}>
                <RadioGroup value={this.state.selectedItem.single} onChange={(e) => { this.editHandle(e.target.value, "single") } }>
                  <Radio key="boy" value={true}>单身狗</Radio>
                  <Radio key="girl" value={false}>恩爱狗</Radio>
                </RadioGroup>
              </FormItem>
            </Form>
          </Modal>

        </div>
      </div>
    );
  },
  componentDidMount: function () {

    this.setState({
      loading: true
    });
    var This = this;
    request
      .get(url)
      .end(function (err, res) {
        if (res) {
          res.body = res.body.map(function (o, index) {
            o.key = index;
            return o;
          });
          This.setState({
            data: res.body,
            loading: false
          });
        } else {
          This.setState({
            loading: false
          });
        }

      });
  },
  addHandle: function (value, type) {
    var o = this.state.addInfo;
    o[type] = value;
    this.setState({
      addInfo: o
    });
  },
  add: function () {
    var This = this;
    This.clearForm();
    request.post(url).send(this.state.addInfo).end(function (err, res) {
      if (res.ok) {
        var data = This.state.data;
        res.body.key = data.length;
        data.unshift(res.body);
        This.setState({
          data: data,
        });
        message.success("添加成功！");
      }
    });
  },
  deleteHandle: function () {
    if (this.state.selectedID) {
      this.setState({
        showDelete: true
      });
    }

  },
  delete: function () {
    var This = this;
    This.setState({ showDelete: false });
    var o = url + this.state.selectedID + "\\";
    request.delete(o).end(function (err, res) {
      if (res.ok) {
        var data = This.state.data;
        for (var i = 0; i < data.length; i++) {
          if (This.state.selectedID === data[i].id) {
            data.splice(i, 1);
            break;
          }
        }
        var item ={
        name: "",
        age: "",
        sex: "boy",
        single: true
      };
        This.setState({ data: data, selectedID: null, selectedIndex: null ,selectedItem:item});
        message.success("删除成功！");
      }

    })
  },
  editHandle: function (value, type) {
    var o = this.state.selectedItem;
    o[type] = value;
    this.setState({
      addInfo: o
    });
  },
  edit: function () {
    var This = this;
    This.setState({ showEdit: false });
    var o = url + this.state.selectedItem.id + "\\";
    var upData = this.state.selectedItem;
    request.put(o).send(upData).end(function (err, res) {
      if (res.ok) {
        message.success("修改成功！");
        var data = This.state.data;
        for (var i = 0; i < data.length; i++) {
          if (upData.id === data[i].id) {
            for (var k in upData) {
              if (data[i][k]) {
                data[i][k] = upData[k];
              }
            }
            break;
          }
        }
        This.setState({
          data: data
        });
      }
    });

  },
  clearForm: function () {
    var o = { name: "", age: "", sex: "boy", single: true }
    this.setState({
      showAdd: false,
      addInfo: o
    })
  }
}));
module.exports = Students;