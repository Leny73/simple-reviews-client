import React from "react"
import ReactDOM from "react-dom"
import Dashboard from "./dashboard"
import registerServiceWorker from "./register-service-worker"
import "antd/dist/antd.css"

ReactDOM.render(<Dashboard />, document.getElementById("root"))

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./dashboard.js", () => {
    const NextApp = require("./dashboard").default
    ReactDOM.render(<NextApp />, document.getElementById("root"))
  })
}

registerServiceWorker()
