import React from 'react';

interface MyProps{
    switchLanguage:(event:any)=>void;
}
export const LanguageSwitch=({
  switchLanguage,
}:MyProps):React.ReactElement=>{
  return (
    <select name="language" onChange={switchLanguage} id="languageSwitcher" >
      <option value="english" selected>English</option>
      <option value="russian" >Russian</option>
    </select>
  );
};

