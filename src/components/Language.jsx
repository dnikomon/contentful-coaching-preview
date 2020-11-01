import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  'fi-FI': "Suomi",
  'en-GB': "English",
  sv: "Svenska",
}

const Language = () => (
  <div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <a
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              color: 'back',
              margin: 10,
              textDecoration: currentLocale === language ? `underline` : `none`,
              cursor: `pointer`,
            }}
          >
            {languageName[language]}
          </a>
        ))
      }
    </IntlContextConsumer>
  </div>
)

export default Language