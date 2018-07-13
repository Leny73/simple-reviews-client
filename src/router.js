import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
import { connect } from "react-redux"

import App from "./containers/App/App"
import Async from "./helpers/async-function"

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={"/"}
          component={Async(() => import("./containers/Pages/signin"))}
        />
        <Route
          exact
          path={"/signin"}
          component={Async(() => import("./containers/Pages/signin"))}
        />
        <RestrictedRoute
          path="/dashboard"
          component={App}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </ConnectedRouter>
  )
}

export default connect(state => ({
  isLoggedIn: state.Auth.get("authorization") !== null
}))(PublicRoutes)
