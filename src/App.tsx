import React, {useState} from 'react';
import {Header} from './components/header';
import {LanguageSwitch} from './components/languageSwitch';
import AppRouter from './route/appRouter';
import {I18nProvider, LOCALES} from './i18n';

const App: React.FC=()=> {
  const [locale, setLocale]=useState<any>(LOCALES.ENGLISH);

  const switchLanguage=(event:any):void =>{
    switch (event.target.value) {
      case 'english':
        setLocale(LOCALES.ENGLISH);
        break;
      case 'russian':
        setLocale(LOCALES.RUSSIAN)
        break;
    }
  };

  return (
    <I18nProvider locale={locale} >
      <div>
        <Header />
        <LanguageSwitch switchLanguage={switchLanguage} />      
        <AppRouter /> 
      </div>
    </I18nProvider>
  );
};

export default App;

