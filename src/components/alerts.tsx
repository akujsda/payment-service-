import React from 'react';
import translate from '../i18n/messages/translate';


interface Props{
    isReplenishmentSuccessful?:boolean;
}

export const Alerts:React.FC<Props>=({
  isReplenishmentSuccessful,
}):React.ReactElement | null=>{
  if ( isReplenishmentSuccessful===false) {
    return (
      <div
        className="errorMessage"
        id="replanishmentError"
      >{translate('replanishmentError')}
      </div>);
  } else if ( isReplenishmentSuccessful) {
    return (
      <div
        id="successfullMessage"
      >{translate('replanishmentSuccess')}
      </div>);
  }
  return null;
};
