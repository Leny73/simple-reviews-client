import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import Input from "../../components/uielements/input"
import Checkbox from "../../components/uielements/checkbox"
import Button from "../../components/uielements/button"
import actions from "../../redux/auth/actions"
import IntlMessages from "../../components/utility/intlMessages"
import SignInStyleWrapper from "./signin.style"
import popover from "../../components/uielements/popover";

const { login } = actions

class SignIn extends Component {
  state = {
    redirectToReferrer: false
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true })
    }
  }

  handleLogin = () => {
    const { login, history } = this.props
    const userInfo = {
      username: document.getElementById('username').value || '',
      password: document.getElementById('password').value || ''
    }
    login({ history, userInfo })
  }

  render() {
    const from = { pathname: "/dashboard" }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <img
                  className="logo-image"
                  src="/images/logo-dark.png"
                  alt="SimpleReviews Logo"
                />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input
                  id="username"
                  size="large"
                  placeholder="Username"
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  id="password"
                  size="large"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>
            </div>
            <Link to="/resetpassword">Forgotten passoword?</Link>
          </div>
        </div>
      </SignInStyleWrapper>
    )
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get("authorization") !== null ? true : false
  }),
  { login }
)(SignIn)
