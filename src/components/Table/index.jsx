var React = require("react");
var ReactDOM = require("react-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");


module.exports = React.createClass({
    componentDidUpdate:function(){
        
    },
    componentDidMount:function(){
        this.selectedStyle(this.state.activeIndex);
    },
    getInitialState: function () {
        return {
            activeIndex: 1,
            showLength: 5,
            data:{
            dataSource: [{
                key: '1',
                name: '胡彦斌',
                age: 1,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 2,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 3,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 4,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 5,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 6,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 7,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 8,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 9,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 10,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 11,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 12,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 13,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 14,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 15,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 16,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 17,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 18,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 19,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 20,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 21,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 22,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 23,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 24,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 25,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 26,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 27,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 28,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 29,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 30,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 31,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 33,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 34,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 35,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 36,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 37,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 38,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 39,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 40,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 41,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 43,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 44,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 45,
                address: '西湖区湖底公园1号'
            }],
            columns: [{
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            }]

        }
        }
    },
    pageLength: 0,
    render: function () {
        var key = [];
        var header = this.props.columns ?this.props.columns:this.state.data.columns;
        
        var columns = header.map(function (o, index) {
            key.push(o.key);
            return (
                <td key={o.title + index}>{o.title}</td>
            )
        });

        var node = [];
        var data = this.props.dataSource?this.props.dataSource:this.state.data.dataSource;
        var start = (this.state.activeIndex - 1) * this.state.showLength;
        var end = start + this.state.showLength;
        for (var i = start; i < end; i++) {
            if (data[i]) {
                var td = [];
                for (var j = 0; j < key.length; j++) {
                    td.push(
                        <td key={data[i][key[j]] + j}>{data[i][key[j]]}</td>
                    )
                }
                node.push(
                    <tr key={"tr-" + i}>
                        {td}
                    </tr>
                )
            }
        }
        //分页处理
        
            this.pageLength = Math.ceil(data.length / this.state.showLength);
            var btns = [], pages;
            var showlength=2;//中间显示几个按钮
            
            
            for (var ii = this.state.activeIndex * 1 - showlength; ii <= this.state.activeIndex * 1 + showlength; ii++) {
                if (ii >= 2 && ii < this.pageLength) {
                    btns.push(
                        <li key={ii}>
                            <span  onClick={this.selectPage}>{ii}</span>
                        </li>
                    );
                }

            }
            pages =
                <nav className="pull-right">
                    <ul className="pagination" ref="btns">
                        <li><span onClick={this.preClick}>&laquo;</span></li>
                        <li><span  onClick={this.selectPage}>1</span></li>
                        <li><span style={{ display: this.state.activeIndex >= showlength+3 ? "block" : "none" }}>...</span></li>
                        {btns}
                        <li><span style={{ display: this.state.activeIndex * 1 + showlength * 1 > this.pageLength-2 ? "none" : "block" }}>...</span></li>
                        <li><span style={{display:this.pageLength>1?"block":"none"}} href="" onClick={this.selectPage}>{this.pageLength}</span></li>
                        <li><span  onClick={this.nextClick}>&raquo;</span></li>
                    </ul>
                </nav>
        

        return (
            <div className="" >
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {columns}
                        </tr>
                    </thead>
                    <tbody>
                        {node}
                    </tbody>
                </table>
                {pages}
            </div>

        );
    },
    selectPage: function (e) {
        var index = e.target.innerHTML;
        this.selectedStyle(index);
        this.setState({
            activeIndex: index
        });
    },
    preClick: function () {
        
        var index = this.state.activeIndex;
        index--;
        index = index < 1 ? 1 : index;
        this.selectedStyle(index);
        this.setState({
            activeIndex: index
        });
        
        
    },
    nextClick: function () {
        var index = this.state.activeIndex;
        index++;
        index = index > this.pageLength ? this.pageLength : index;
        this.selectedStyle(index);
        this.setState({
            activeIndex: index
        });
    },
    selectedStyle:function(index){
        var btns =ReactDOM.findDOMNode(this.refs.btns) ;
        var lis=btns.getElementsByTagName("li");
        
        for(var i=0;i<lis.length;i++){
            var a = lis[i].getElementsByTagName("span")[0]
            var html =a.innerHTML;
            if(html*1 === index*1){
                a.style.background="#eee";
            }else{
                a.style.background="#fff";
            }
        }
    }
});