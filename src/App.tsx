import React, { useState } from 'react';
import './App.css';
import Operators from "./components/operators";
import NumberInput from "./components/numberInput";
import SumInput from "./components/sumInput";
import ButtonInput from "./components/buttonInput";
import Alerts from "./components/alerts";
import Loading from "./components/loading";
import styled from "styled-components";
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import Header from "./components/header"



const WrapperCenter=styled.div`
  min-width:100%;
  display:flex;
  justify-content:center;
  
`
const App: React.FC=()=> {
  const loadCheck=()=>{
    returnToMainDisplay()
      history.push("/")      
  }
    document.addEventListener("DOMContentLoaded", loadCheck);
window.onpopstate=()=>{
  returnToMainDisplay()
  history.push("/")
}
    let [isCorrectNumber, checkNumberCorrect]=useState<boolean | undefined>()
    let [operator, changeOperator]=useState<string>("All")
    let [isCorrectBalance, checkBalanceCorrect]=useState<boolean | undefined>()
    let [isReplenishmentSuccessful, changeSuccessfulReplenishment]=useState<boolean | undefined>()
    let [isLoadiengActive, changeLoading]=useState<boolean>(false);
    const history=useHistory();
  
  function optionOperator(event:any):void {
    if (event.target.tagName !==("IMG")) return;
      changeOperator(operator=event.target.id)     
}

function handlePhoneNumber(event:React.ChangeEvent<HTMLInputElement>):void{
      const currentNumber=event.target.value
      const correctNumber=currentNumber.includes("_",0)===true || currentNumber[3] !=="9"
      if (correctNumber){
        checkNumberCorrect(false)
        event.target.className="inCorrectInput"
      }else{
        checkNumberCorrect(true)
        event.target.className="correctInput"
      }  
}

function handleAmount(event:React.ChangeEvent<HTMLInputElement>):void {
  const correctAmount= +event.target.value>0 && +event.target.value<1001;
      if(correctAmount){
        checkBalanceCorrect(true)
        event.target.className="correctInput"
      }else{
        checkBalanceCorrect(false) 
        event.target.className="inCorrectInput"  
      }
}

const returnToMainDisplay=()=>{
        changeOperator("All")
        checkNumberCorrect(undefined)
        changeSuccessfulReplenishment(undefined)
        checkBalanceCorrect(undefined)
}

const startLoading=()=>{
        changeLoading(true)
        setTimeout(()=>{
        randomBoolean()
     },500)
    
}
const randomBoolean =async()=>{       
    const API_RANDOM=await fetch ('https://randomapi.com/api/370c24adc2f47da5e6300972dcb4517a');
    const data=await API_RANDOM.json()
      changeSuccessfulReplenishment(isReplenishmentSuccessful=(data.results[0].randomBoolean ===1)? true : false) 
      changeLoading(false)
    if (isReplenishmentSuccessful===true){  
        setTimeout(()=>{
            history.push("/")
            returnToMainDisplay()            
        },1000)
              
        }
  }

return ( 
  <Router >
      <Route path="/">
      <Header />
        <WrapperCenter onClick={optionOperator}>
            <Operators stateOperator={operator} id="megafon"  picture="https://i.ibb.co/M1SbVFr/megafon.png" />
            <Operators stateOperator={operator} id="beeline"    picture="https://i.ibb.co/S3fyvFf/beeline.png" />
            <Operators stateOperator={operator} id="MTC"   picture="https://i.ibb.co/c2Vnhyk/mts.png" />
        </WrapperCenter>        
      </Route>   
      <Route path="/numberinput">
        <NumberInput stateOperator={operator} handlePhoneNumber={handlePhoneNumber} />
          <Alerts isCorrectNumber={isCorrectNumber} />
          <SumInput stateOperator={operator} handleAmount={handleAmount} />  
          <Alerts isCorrectBalance={isCorrectBalance} />        
        <ButtonInput
          isCorrectBalance={isCorrectBalance}
          isCorrectNumber={isCorrectNumber}
          isLoadiengActive={isLoadiengActive}
          startLoading={startLoading}
            />          
           <Alerts isReplenishmentSuccessful={isReplenishmentSuccessful} />            
            <Loading isLoadiengActive={isLoadiengActive} /> 
      </Route>
  </Router>
  );
}

export default App;

