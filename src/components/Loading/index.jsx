import React from "react";
import {Icon} from "antd";
import "./index.css";

var Loading = React.createClass({
    render: function () {
        return (
            <div className="loading" style={{display:this.props.show?"block":"none"}}>
                <div className="loading-icon">
                    <div ><Icon type="loading"/></div>
                    <p>正在载入</p>
                </div>

            </div>
        )
    }
});

module.exports = Loading;