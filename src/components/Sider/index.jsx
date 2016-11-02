import React from 'react';
import { Link} from 'react-router';
import { Menu, Icon } from 'antd';
require("./index.css");
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const Sider = React.createClass({
  getInitialState() {
    return {
      current: '1',
    };
  },
  handleClick(e) {
    this.setState({
      current: e.key,
    });
    // hashHistory.push(e.key);
    
  },
  render() {
    return (
      <div className="app-container container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <div className="app-slider">
            
              <Menu onClick={this.handleClick}
                style={{  }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.current]}
                mode="inline"
                >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>REACT STUDY</span></span>}>
                  <MenuItemGroup title="作业">
                    <Menu.Item key="Students"><Link activeStyle={{color: 'red'}} to="Students">Students</Link></Menu.Item>
                    <Menu.Item key="Todo"><Link activeStyle={{color: 'red'}} to="Todo">Todo</Link></Menu.Item>
                    <Menu.Item key="Table"><Link activeStyle={{color: 'red'}} to="Table">Table</Link></Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              </Menu>

            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <div className="app-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
module.exports = Sider;