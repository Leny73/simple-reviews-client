import React from "react"
import { Provider } from "react-redux"
import { store, history } from "./redux/store"
import PublicRoutes from "./router"
import { ThemeProvider } from "styled-components"
import { LocaleProvider } from "antd"
import { IntlProvider } from "react-intl"
import AppLocale, { getCurrentLanguage } from "./language-provider"
import DashAppHolder from "./dashboard.style"
import Boot from "./redux/boot"
import themes from "./settings/themes"
import { themeConfig } from "./settings"

const currentAppLocale = AppLocale[getCurrentLanguage("english").locale]

const Dashboard = () => (
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <DashAppHolder>
          <Provider store={store}>
            <PublicRoutes history={history} />
          </Provider>
        </DashAppHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
)

Boot()
  .then(() => Dashboard())
  .catch(error => console.error(error))

export default Dashboard

export { AppLocale }
