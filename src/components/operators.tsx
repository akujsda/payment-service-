import React from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"
interface Props{
    id:string;
    picture:string;
    stateOperator:string;
}
const Image=styled.img`
    position:relative;
     margin-top:20px;
     box-shadow: 0px 0px 5px 5px #FFFFC5; 
     animation:swipeDown linear 0.6s;
     border-radius:50%;
     @keyframes swipeDown{
        0%{
          transform:translate(0px,-1000px)
        }
        100%{
          transform:translate(0px,0px)
        }
      }
`
const AllOperators=styled(Image)`
    width:75px;
    height:75px;
    margin:15px;
    top:120px;
`
const ChosenOperator=styled(Image)`
    width:150px;
    height:150px;
    top:100px;
`

const Operators:React.FC<Props>=({
    id,
    picture,
    stateOperator,
})=> {
    if (stateOperator === "All") {       
        return <Link to="./numberinput"><AllOperators id={id}  src={picture} alt="pic"/></Link>
    }else if(stateOperator===id){
        return <ChosenOperator id={id}  src={picture} alt="pic"/>
    }else{
        return null;
    }
}


export default Operators