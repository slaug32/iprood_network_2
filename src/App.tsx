import React from "react";
import s from "./App.module.css";
import { NavLink, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initialize } from "./redux/app_reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { AppStateType } from "./redux/redux_store";
import PlugComponent from "./components/PlugComponent/PlugComponent";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

type AppPropsType = {
  initialize: () => void;
  initialized: boolean;
};

const { Header, Sider, Content } = Layout;

class App extends React.Component<AppPropsType> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    this.props.initialize();
    console.log("start");
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              <HeaderContainer />
            </div>
            <Menu
              className={s.nav}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                <div className={s.item}>
                  <NavLink to="/profile" activeClassName={s.activeLink}>
                    My Profile
                  </NavLink>
                </div>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <div className={`${s.item} ${s.active}`}>
                  <NavLink to="/dialogs" activeClassName={s.activeLink}>
                    Massages
                  </NavLink>
                </div>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <div className={`${s.item} ${s.active}`}>
                  <NavLink to="/users" activeClassName={s.activeLink}>
                    Users
                  </NavLink>
                </div>
              </Menu.Item>
              <Menu.Item key="4" icon={<CloseCircleOutlined />}>
                <div className={`${s.item} ${s.active}`}>
                  <NavLink to="/news" activeClassName={s.activeLink}>
                    News
                  </NavLink>
                </div>
              </Menu.Item>
              <Menu.Item key="5" icon={<CloseCircleOutlined />}>
                <div className={`${s.item} ${s.active}`}>
                  <NavLink to="/music" activeClassName={s.activeLink}>
                    Music
                  </NavLink>
                </div>
              </Menu.Item>
              <Menu.Item key="6" icon={<CloseCircleOutlined />}>
                <div className={`${s.item} ${s.active}`}>
                  <NavLink to="/settings" activeClassName={s.activeLink}>
                    Settings
                  </NavLink>
                </div>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/news" render={() => <PlugComponent />} />
                <Route path="/music" render={() => <PlugComponent />} />
                <Route path="/settings" render={() => <PlugComponent />} />
                <Route path="/login" render={() => <LoginPage />} />
              </div>
            </Content>
          </Layout>
        </Layout>
      );
    }
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);
