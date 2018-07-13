import React, { Component } from "react"
import { Route } from "react-router-dom"
import Async from "../../helpers/async-function"

const routes = [
  {
    path: "",
    component: Async(() => import("../blank-page"))
  },
  {
    path: "blank-page",
    component: Async(() => import("../blank-page"))
  },
  {
    path: "inbox",
    component: Async(() => import("../Mail"))
  },
  {
    path: "mailbox",
    component: Async(() => import("../Mail"))
  },
  {
    path: "chat",
    component: Async(() => import("../Chat"))
  },
  {
    path: "contacts",
    component: Async(() => import("../Contacts"))
  }
]

class AppRouter extends Component {
  render() {
    const { url, style } = this.props
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          )
        })}
      </div>
    )
  }
}

export default AppRouter
