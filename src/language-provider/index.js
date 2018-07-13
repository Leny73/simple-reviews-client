import { language } from "../settings"
import Enlang from "./entries/en-US"
import Zhlang from "./entries/zh-Hans-CN"
import Salang from "./entries/ar_SA"
import Itlang from "./entries/it_IT"
import Eslang from "./entries/es_ES"
import Frlang from "./entries/fr_FR"
import { addLocaleData } from "react-intl"

const AppLocale = {
  en: Enlang,
  zh: Zhlang,
  sa: Salang,
  it: Itlang,
  es: Eslang,
  fr: Frlang
}
addLocaleData(AppLocale.en.data)
addLocaleData(AppLocale.zh.data)
addLocaleData(AppLocale.sa.data)
addLocaleData(AppLocale.it.data)
addLocaleData(AppLocale.es.data)
addLocaleData(AppLocale.fr.data)

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: "english",
      locale: "en",
      text: "English"
    },
    {
      languageId: "chinese",
      locale: "zh",
      text: "Chinese"
    },
    {
      languageId: "spanish",
      locale: "es",
      text: "Spanish"
    },
    {
      languageId: "french",
      locale: "fr",
      text: "French"
    },
    {
      languageId: "italian",
      locale: "it",
      text: "Italian"
    }
  ]
}

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0]
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language
    }
  })
  return selecetedLanguage
}

export default AppLocale
