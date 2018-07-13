import React, { Component } from "react"
import { connect } from "react-redux"
import DesktopView from "./desktop-view"
import MobileView from "./mobile-view"
import TabView from "./tab-view"

class Mail extends Component {
  render() {
    const { view, height } = this.props
    const MailView =
      view === "DesktopView"
        ? DesktopView
        : view === "TabView"
          ? TabView
          : MobileView
    return (
      <div style={{ height: "100%" }}>
        <MailView height={height} />
      </div>
    )
  }
}
export default connect(state => ({
  ...state.App.toJS()
}))(Mail)
