import React, {Fragment} from 'react';
import {IntlProvider} from 'react-intl';
import {LOCALES} from './locales';
import messages from './messages';
import PropTypes from 'prop-types'

interface Props{
    children:React.ReactElement,
    locale:string,
}

const Provider:React.FC<Props> =({children, locale=LOCALES.ENGLISH},
):React.ReactElement=>{
  return <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>;
};

Provider.propTypes={
  children: PropTypes.any,
  locale: PropTypes.any,
}

export default Provider;
