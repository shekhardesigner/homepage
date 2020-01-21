import React from 'react';
import css from './container.module.scss';
import { useIntl, IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
  en: '🇺🇸',
  ne: '🇳🇵',
};

export default ({ children }) => {
  const intl = useIntl();
  
  return <IntlContextConsumer>
      {({ languages, language: currentLocale }) => <div className={`${css.container} intl-${currentLocale}`}>
      <div className={css.langTool}>
        <label>{intl.formatMessage({ id: "langLabel" })} </label>
        { languages.map(lang => (
          <button
            type="button"
            key={lang}
            onClick={() => changeLocale(lang)}
            className={ lang === currentLocale && css.active}
            disabled={ lang === currentLocale}
          >
            {languageName[lang]}
          </button>
        ))}
        </div>
        {children}
        </div>
      }
    </IntlContextConsumer>
};
