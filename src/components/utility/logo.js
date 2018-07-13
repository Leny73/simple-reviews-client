import React from "react"
import { Link } from "react-router-dom"
import { siteConfig } from "../../settings"

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              <i className={siteConfig.siteIcon} />
            </Link>
          </h3>
        </div>
      ) : (
          <h3>
            <Link to="/dashboard">
              <img
                className="logo-image"
                src="/images/logo.png"
                alt="SimpleReviews Logo"
              />
            </Link>
          </h3>
        )}
    </div>
  )
}
