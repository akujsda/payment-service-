import React from 'react';
import styled from "styled-components"
import {Router,Route} from "react-router-dom"
import { createBrowserHistory } from 'history';

interface Props{
    isCorrectBalance:boolean | undefined;
    isCorrectNumber:boolean | undefined;  
    isLoadiengActive:boolean;
    startLoading:()=>void;

}
    const history=createBrowserHistory();
const ButtonStyled=styled.button`
    position: absolute;
    top:580px;
    font-size: 28px;
    font-family: 'Do Hyeon', sans-serif;
    color:black;
    background:transparent;
    border-radius:30px;
    outline: none;
    box-shadow: 0px 4px 10px 5px grey; 
    :hover{ background: rgb(245,252,11);
            background: linear-gradient(180deg, rgba(245,252,11,1) 0%, rgba(165,252,21,1) 100%);
        }
@media screen and (max-device-width:979px){
    width:300px;
    height: 50px;   
}

@media screen and (min-device-width:980px){
    width:200px;
    height: 40px;   
}
`

const ButtonInput:React.FC<Props>=({
    isCorrectBalance,
    isCorrectNumber,
    isLoadiengActive,
    startLoading,
    
})=> {
    const isButtonActive=isCorrectBalance && isCorrectNumber && isLoadiengActive===false
  if (isButtonActive){          
        return <Router history={history}>
                    <Route> <ButtonStyled id="button" name="button" onClick={startLoading}>Payment</ButtonStyled> </Route>
               </Router>
    }return null;   
}
export default ButtonInput