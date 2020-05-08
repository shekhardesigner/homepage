import React from 'react';
import { useIntl, IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import Header from '../header';
import css from './container.module.scss';

const languageName = {
  en: {txt: 'EN', title: 'Change site language to US English'},
  ne: {txt: 'NP', title: 'Change site language to Nepali'},
  fr: {txt: 'FR', title: 'Change site language to French'},
};

export default ({ children, nav }) => {
  const intl = useIntl();
  const hasNav = nav;
  
  return <IntlContextConsumer>
      {({ languages, language: currentLocale }) => <div className={`${css.container} intl-${currentLocale} ${hasNav ? css.hasNav : css.noNav}`}>
        <Header>
          <div className={css.langTool}>
            { languages.map(lang => (
              <button
                type="button"
                key={lang}
                onClick={() => changeLocale(lang)}
                className={ lang === currentLocale ? css.active : undefined}
                title={languageName[lang].title}
                disabled={ lang === currentLocale}
              >
                {languageName[lang].txt}
              </button>
            ))}
            </div>
          </Header>
          {children}
          <footer className={`${css.footer}`}>
            &copy; 2010 - {new Date().getFullYear()} - {intl.formatMessage({ id: "fullname"})}
          </footer>
        </div>
      }
    </IntlContextConsumer>
};
