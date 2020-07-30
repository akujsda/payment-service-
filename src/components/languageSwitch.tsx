import React from 'react';

interface MyProps{
    switchLanguage:(event:React.ChangeEvent)=>void;
}
export const LanguageSwitch=({
  switchLanguage,
}:MyProps):React.ReactElement=>{
  return (
    <select name="language" defaultValue="english" onChange={switchLanguage} id="languageSwitcher" >
      <option value="english" >English</option>
      <option value="russian" >Russian</option>
    </select>
  );
};

