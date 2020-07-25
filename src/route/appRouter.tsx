import React, {useState} from 'react';
import {Operators} from '../components/operators';
import FormField from '../components/formField';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';


const AppRouter: React.FC=():React.ReactElement=> {
  const loadCheck=()=>{
    returnToMainDisplay();
    history.push('/');
  };
  document.addEventListener('DOMContentLoaded', loadCheck);
  window.onpopstate=():void =>{
    returnToMainDisplay();
    history.push('/');
  };
  const [operator, changeOperator]=useState<string>('All');
  const [isReplenishmentSuccessful, changeSuccessfulReplenishment]=
  useState<boolean | undefined>(false);
  const [isLoadiengActive, changeLoading]=useState<boolean>(false);
  const history=useHistory();
 
  function optionOperator(event:any):string | undefined {
    if (event.target.tagName !==('IMG')) return;
    changeOperator(event.target.id);
  }

  const returnToMainDisplay=(): void =>{
    changeOperator('All');
    changeLoading(false);
    changeSuccessfulReplenishment(undefined);
  };

  const startLoading=(): void =>{
    changeLoading(true);
    setTimeout(()=>{
      randomBoolean();
    }, 500);
  };
  const randomBoolean = async ()=>{
    const JSON='https://randomapi.com/api/370c24adc2f47da5e6300972dcb4517a';

    try {
      const API_RANDOM=await fetch(JSON);
      const data=await API_RANDOM.json();
      const dataResult=(await data.results[0].randomBoolean ===1)? true : false;
      changeSuccessfulReplenishment(dataResult);
      setTimeout(() => {
        changeLoading(false);
      }, 2000);
      if (dataResult===true) {
        setTimeout( () => {
          history.push('/');
          returnToMainDisplay();
        }, 1000);
      }
    } catch (e) {
      alert('Try again later');
      returnToMainDisplay();
    }
  };
  return (
    <Router >
      <Route path="/">
        <div onClick={optionOperator} className="flexWrapper">
          <Operators stateOperator={operator} id="megafon" picture="https://i.ibb.co/M1SbVFr/megafon.png" />
          <Operators stateOperator={operator} id="beeline" picture="https://i.ibb.co/S3fyvFf/beeline.png" />
          <Operators stateOperator={operator} id="MTC" picture="https://i.ibb.co/c2Vnhyk/mts.png" />
        </div>
      </Route>

      <Route path="/numberinput" component={FormField}>

        <FormField
          startLoading={startLoading}
          stateOperator={operator}
          isLoadiengActive={isLoadiengActive}
          isReplenishmentSuccessful={isReplenishmentSuccessful}
        />
      </Route>
    </Router>
  );
};

export default AppRouter;

