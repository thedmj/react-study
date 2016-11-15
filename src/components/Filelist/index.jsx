// edit 2016/11/13
import React from 'react';
import { get, rename, mkdir, remove, past } from "./ajax.js";
import { Icon, Breadcrumb, Input, Modal, message } from "antd";
import { hashHistory, Link } from 'react-router';
import Loading from "../Loading";
import $ from "jquery";
import Menu from "../Menu";
require("./index.css");
require("antd/dist/antd.css");
import TweenMax from "../../../node_modules/gsap/src/minified/TweenMax.min.js";

var Filelistitem = React.createClass({
    getInitialState: function () {
        return {
            showRename: false,
            title: this.props.title,
            path: this.props.path,
            hasCut: false
        }

    },
    render: function () {
        var style = {
            background: this.props.active ? "blue" : "inherit",
            opacity: this.state.hasCut ? "0.5" : "1"
        }
        var typeList = { ".html": "code", ".txt": "file-text", ".jpg": "file-jpg", ".png": "picture", ".git": "picture", ".md": "book" };

        var type = typeList[this.props.ext];
        if (!typeList[this.props.ext]) {
            type = "file-unknown"
        };
        return (
            <li onMouseDown={this.rightClick} style={style}>
                <span className="icon" onClick={(path, isfolder) => { this.props.itemclick(this.state.path, this.props.isfolder); } }>
                    <Icon type={this.props.isfolder ? "folder" : type} />
                </span>
                <span className="title" style={{ display: this.state.showRename ? "none" : "inline-block" }}>
                    {this.state.title}
                </span>
                <div className="rename" style={{ display: this.state.showRename ? "block" : "none" }}>
                    <Input type="text" defaultValue={this.props.title} ref={this.props.title} onMouseDown={(e) => { e.stopPropagation(); } } onPressEnter={this.onPressEnter} />
                </div>
            </li>
        )
    },
    componentDidMount: function () {
        if (this.state.title === this.props.filelist.state.selectedItem.name) {
            this.setState({
                showRename: true
            });
            this.props.filelist.setState({
                selectedItem: {
                    name: this.state.title,
                    item: this
                }
            })
        }
    },
    onPressEnter: function (e) { //rename输入回车

        this.rename(this.props.path, e.target.value);

    },
    rename: function (path, name) { //重命名函数
        console.log(this.props.path);
        if (this.props.title !== name) {
            var This = this;
            var reg = new RegExp("^" + name + "$");
            var dir = this.props.filelist.state.dir;
            var index = 0;
            for (var i = 0; i < dir.length; i++) {
                if (reg.test(dir[i].name)) {
                    index++;
                }
            }
            index = index === 0 ? "" : "(" + index + ")";
            name += index;
            rename(path, name, function (res) {
                console.log(path);
                This.setState({
                    title: name,
                    path: res.path,
                    showRename: false
                });
            }, function (err) {

                if (err) console.log(err);
            });
        } else {
            this.setState({ showRename: false });
        }

    },
    componentDidUpdate: function () {
        if (this.props.pickItemName === this.props.title) {


        }
    },
    componentWillReceiveProps: function (nextProps) { //更换选中项后取消激活rename 这里componentWillReceiveProps会遍历items
        if (this.props.selectedItem.name === "") {
            this.setState({
                showRename: false,
                hasCut: false
            });
        }
    },

    rightClick: function (e) { //右键文件激活选中项
        e.stopPropagation();
        if (e.button === 2) {
            if (!!this.props.filelist.state.selectedItem.item) {
                this.props.filelist.state.selectedItem.item.setState({
                    showRename: false,
                });
            }
            this.props.filelist.setState({
                showMenu: true,
                position: {
                    x: e.clientX - this.props.filelist.offsetX,
                    y: e.clientY
                }
            });
            this.props.pickItem(this.props.title, this);
        }
    },

});

// ------------------------------------------------------------------------------------


var Filelist = React.createClass({
    offsetX: 0,
    offsetY: 0,
    getInitialState: function () {
        return { dir: [], path: "/" + this.props.routeParams.splat, loading: false, selectedItem: { name: "", item: null }, showMenu: false, position: { x: 0, y: 0 }, copyItem: null, cutItem: null }
    },
    componentDidMount: function () {
        var offset = $(".col-md-10.col-sm-12").eq(0).offset()
        this.offsetX = offset.left;
        this.offsetY = offset.top;
        this.setState({ loading: true });
        var This = this;
        get(this.state.path, function (res) {
            This.setState({ dir: res.file, loading: false });
            var t = new TweenMax.TimelineMax();
            var text = $(".filelist h1 span");
            t.staggerFrom(text, 3, { transformOrigin: "50% -500%", rotationZ: "90deg", ease: TweenMax.Elastic.easeOut.config(1, 0.3) }, 0.1);
            t.staggerTo(text, 0.3, { autoAlpha: 1 }, 0.1, "-=4.5");
        }, function (err) {
            console.log(err);
        });
    },
    render: function () {
        var This = this;
        var dir = this.state.dir;
        var items = dir.map(function (item, index) {
            var active = false;
            if (item.name === This.state.selectedItem.name) {
                active = true;
            }
            return <Filelistitem active={active} key={item.path + item.name} title={item.name} itemclick={This.itemClickHandle} path={item.path} ext={item.ext} isfolder={item.isFolder} pickItem={This.pickItem} pickItemName={This.state.selectedItem.name} selectedItem={This.state.selectedItem} cancel={This.cancel} filelist={This} />
        });
        var breadItems = [];
        var breadPath = "";
        breadItems = this.props.params.splat.split("/").map(function (o, index) {
            breadPath += "/" + o;
            return (
                <Breadcrumb.Item key={o + index}><Link to={"clound" + breadPath}>{o}</Link></Breadcrumb.Item>
            )
        });

        return (
            <div className="filelist" onContextMenu={(e) => { e.preventDefault(); } } onMouseDown={this.rightClick}>
                <h1><span>C</span><span>L</span><span>O</span><span>U</span><span>N</span><span>D</span><span>云</span><span>盘</span></h1>
                <div className="bread" style={{ "WebkitFilter": this.state.loading ? "blur(6px)" : "blur(0px)" }}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="clound/">Home</Link></Breadcrumb.Item>
                        {breadItems}
                    </Breadcrumb>
                </div>
                <ul style={{ "WebkitFilter": this.state.loading ? "blur(6px)" : "blur(0px)" }}>
                    {items}
                </ul>
                <Loading show={this.state.loading} />

                <Menu position={this.state.position} showMenu={this.state.showMenu} onrename={this.renameShow} selectedItemName={this.state.selectedItem.name} filelist={this} newfolder={this.newfolder} delete={this.delete} getCopyItem={this.getCopyItem} getCutItem={this.getCutItem} onpast={this.onpast} />
            </div>
        )
    },
    itemClickHandle: function (path, isfolder) { //文件点击事件
        var url = "http://101.200.129.112:9527/static/";
        path = path.replace(/^\//, "");
        if (isfolder) {
            hashHistory.push("clound/" + path);
        } else {
            window.open(url + path);

        }

    }, componentWillReceiveProps: function (nextProps) { //改变路由时获取路径来改变state
        var path = nextProps.routeParams.splat;
        if (this.props.routeParams.splat !== path) {
            this.update(path + "/");
            this.cancel();
        }
    },
    update: function (path) { //请求函数
        this.setState({ loading: true });
        var This = this;
        get(path, function (res) {
            This.setState({ dir: res.file, path: path, loading: false });
        }, function (err) {
            console.log(err);
        });
    },

    pickItem: function (filename, file) { //获取选中项
        this.setState({
            selectedItem: {
                name: filename,
                item: file
            }
        });
    },
    rightClick: function (e) { //右键弹出菜单 左键隐藏

        if (e.button === 2) {
            if (!!this.state.selectedItem.item) {
                this.state.selectedItem.item.setState({
                    showRename: false
                });
                this.cancel();
            }
            this.setState({
                showMenu: true,
                position: {
                    x: e.clientX - this.offsetX,
                    y: e.clientY
                }
            });
        } else {
            if (!!this.state.selectedItem.item) {
                this.state.selectedItem.item.setState({
                    showRename: false
                });
            }


            this.cancel();
        }
    },
    cancel: function () {
        this.setState({
            showMenu: false,
            selectedItem: {
                name: "",
                item: null
            }
        });
    },
    renameShow: function (e) { //激活重命名
        e.stopPropagation();

        this.setState({
            showMenu: false
        });
        this.state.selectedItem.item.setState({
            showRename: true
        })

    },
    newfolder: function () {
        var dir = this.state.dir;
        var reg = /^newfolder/;
        var index = 0;

        for (var i = 0; i < dir.length; i++) {
            if (reg.test(dir[i].name)) {
                var r = /\((\d)\)$/;
                index = !!dir[i].name.match(r) ? dir[i].name.match(r)[1] * 1 : 0;
                index++;
            }
        }
        index = index === 0 ? "" : "(" + index + ")";
        var name = "newfolder" + index;
        var path = this.state.path === "/" ? "" : this.state.path;
        var newfolder = { path: path + "/" + name, name: name, isFolder: true, ext: "" }
        var This = this;

        mkdir(this.state.path, newfolder.name, function (res) {
            dir.push(newfolder);
            This.setState({
                dir: dir,
                selectedItem: {
                    name: newfolder.name,
                    item: null
                }
            });
        }, function (err) {
            if (err) console.log(err);
        })
    },
    delete: function () {
        this.confirm();
    },
    confirm: function () {
        var This = this;
        var path = This.state.selectedItem.item.state.path;
        var name = This.state.selectedItem.name;

        Modal.confirm({
            title: "删除文件",
            content: "你确定要删除" + name + "?",
            okText: 'OK',
            cancelText: 'Cancel',
            onOk: function () {

                remove(path, function () {
                    var dir = This.state.dir;
                    var newdir = [];
                    for (var i = 0; i < dir.length; i++) {
                        if (dir[i].name !== name) {
                            newdir.push(dir[i])
                        }
                    }
                    This.setState({
                        dir: newdir,
                        selectedItem: {
                            name: "",
                            item: null
                        }
                    });
                }, function (err) {
                    if (err) console.log(err);
                });
            }
        });
    },
    getCopyItem: function (item) {

        this.setState({
            copyItem: item,
            cutItem: null
        });
    },
    getCutItem: function (item) {
        item.setState({
            hasCut: true
        });
        this.setState({
            cutItem: item,
            copyItem: null
        });

    },
    onpast: function () {
        var oldpath, name;
        var newpath = this.state.path;
        var type = "";
        var successtxt = "";
        if (!!this.state.copyItem) {
            type = "copy/";
        }
        if (!!this.state.cutItem) {
            type = "move/";
        }
        switch (type) {
            case "copy/":
                oldpath = this.state.copyItem.state.path;
                name = this.state.copyItem.state.title;
                successtxt = "文件复制成功！";
                break;
            case "move/":
                oldpath = this.state.cutItem.state.path;
                name = this.state.cutItem.state.title;
                successtxt = "文件移动成功！";
                break;
            default:
                break;
        }
        var oldname = name;
        var This = this;
        var dir = This.state.dir;
        var time = "";
        for (var i = 0; i < dir.length; i++) {
            if (dir[i].name === name) {
                time = "(" + new Date().getTime() + ")";
                break;
            }
        }
        name += time;

        newpath = newpath.replace(/\/$/, "");
        if (oldpath === (newpath + "/" + oldname) && type === "move/") {
            message.error("该文件没有移动！");
        } else {
            past(oldpath, newpath, name, type, function (res) {
                console.log(oldpath, newpath + "/" + name);
                dir.push(res);
                This.setState({
                    dir: dir,
                    copyItem: null,
                    cutItem: null
                });
                message.success(successtxt);
            }, function (err) {
                console.log(err, oldpath, newpath);
            })
        }
    },
});
module.exports = Filelist;