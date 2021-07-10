import React from 'react';
import { useIntl, IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import Header from '../header';

import { container, noNav, langTool, active, footer} from './container.module.scss';

const languageName = {
  en: {txt: 'EN', title: 'Change site language to US English'},
  ne: {txt: 'NP', title: 'Change site language to Nepali'},
  fr: {txt: 'FR', title: 'Change site language to French'},
};

const Container = ({ children, nav }) => {
  const intl = useIntl();
  const hasNav = nav;
  
  return <IntlContextConsumer>
      {({ languages, language: currentLocale }) => <div className={`${container} intl-${currentLocale} ${hasNav ? hasNav : noNav}`}>
        <Header>
          <div className={langTool}>
            { languages.map(lang => (
              <button
                type="button"
                key={lang}
                onClick={() => changeLocale(lang)}
                className={ lang === currentLocale ? active : undefined}
                title={languageName[lang].title}
                disabled={ lang === currentLocale}
              >
                {languageName[lang].txt}
              </button>
            ))}
            </div>
          </Header>
          {children}
          <footer className={`${footer}`}>
            &copy; 2010 - {new Date().getFullYear()} - {intl.formatMessage({ id: "fullname"})}
          </footer>
        </div>
      }
    </IntlContextConsumer>
};


export default Container;