import React, { Component } from "react"
import { connect } from "react-redux"
import { Layout } from "antd"
import { Debounce } from "react-throttle"
import { ThemeProvider } from "styled-components"
import WindowResizeListener from "react-window-size-listener"
import authAction from "../../redux/auth/actions"
import appActions from "../../redux/app/actions"
import Sidebar from "../Sidebar/Sidebar"
import Topbar from "../Topbar/Topbar"
import AppRouter from "./AppRouter"
import themes from "../../settings/themes"
import { themeConfig } from "../../settings"
import AppHolder from "./common.style"
import "./global.css"

const { Content } = Layout

const { logout } = authAction

const { toggleAll } = appActions

export class App extends Component {
  render() {
    const { url } = this.props.match

    const { height } = this.props

    return (
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <AppHolder>
          <Layout style={{ height: "100vh" }}>
            <Debounce time="1000" handler="onResize">
              <WindowResizeListener
                onResize={windowSize =>
                  this.props.toggleAll(
                    windowSize.windowWidth,
                    windowSize.windowHeight
                  )
                }
              />
            </Debounce>
            <Topbar url={url} />
            <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
              <Sidebar url={url} />
              <Layout
                className="isoContentMainLayout"
                style={{
                  height: height
                }}
              >
                <Content
                  className="isomorphicContent"
                  style={{
                    padding: "69px 0 0",
                    flexShrink: "0",
                    background: "#f1f3f6",
                    position: "relative"
                  }}
                >
                  <AppRouter url={url} />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </AppHolder>
      </ThemeProvider>
    )
  }
}

export default connect(
  state => ({
    auth: state.Auth,
    height: state.App.toJS().height
  }),
  { logout, toggleAll }
)(App)
