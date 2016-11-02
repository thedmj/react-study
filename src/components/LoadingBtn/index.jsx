/// <reference path="../../typings/react/react-global.d.ts" />
var React = require("react");
var logo = require("../logo.svg");
require("./index.css");


module.exports = React.createClass({
    getInitialState: function () {
        return {
            loading: false
        }
    },
    render: function () {
        var text = this.state.loading ? "等待" : "确认"
        return (
            <div>
                <button onClick={this.clickHandle} ref="btn">
                    <img src={logo} className="loading-btn-ico" alt="logo" height="20" style={{ display: this.state.loading ? "inline" : "none" }} />
                    <span style={{ color: this.state.loading ? "#ccc" : "#000" }}>{text}</span>
                </button>
            </div>

        )
    },
    clickHandle: function () {
        if (!this.state.loading) {
            this.refs.btn.disabled = "disabled";
            this.setState({
                loading: !this.state.loading
            });
            var This = this;
            setTimeout(function () {
                This.refs.btn.disabled="";
                This.setState({
                    loading: !This.state.loading
                });
                
            }, 1000);
        }


    }
});
