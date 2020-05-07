import React from 'react';
import css from './container.module.scss';
import { useIntl, IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
  en: '🇺🇸',
  ne: '🇳🇵',
  fr: '🇫🇷',
};

export default ({ children, nav }) => {
  const intl = useIntl();
  const hasNav = nav;
  
  return <IntlContextConsumer>
      {({ languages, language: currentLocale }) => <><div className={`${css.container} intl-${currentLocale} ${hasNav ? css.hasNav : css.noNav}`}>
        <div className={css.langTool}>
          <label>{intl.formatMessage({ id: "langLabel" })} </label>
          { languages.map(lang => (
            <button
              type="button"
              key={lang}
              onClick={() => changeLocale(lang)}
              className={ lang === currentLocale ? css.active : undefined}
              disabled={ lang === currentLocale}
            >
              {languageName[lang]}
            </button>
          ))}
          </div>
          {children}
        </div>
        <footer className={`${css.footer}`}>
          &copy; 2010 - {new Date().getFullYear()} - {intl.formatMessage({ id: "fullname"})}
        </footer>
        </>
      }
    </IntlContextConsumer>
};
