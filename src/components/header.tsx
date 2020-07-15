import React from 'react';
import styled from "styled-components"

const HeaderStyle=styled.div`
    width:100vw;
    height:75px;
    background: rgb(245,252,11);
    background: linear-gradient(180deg, rgba(245,252,11,1) 0%, rgba(165,252,21,1) 100%);
    position:absolute;
    font-family: 'Do Hyeon', sans-serif;;
    top:0px;
    color:#020202;
    text-align:center;
    line-height: 75px;
    box-shadow: 0px 10px 5px #FFFFC5; 
    @media screen and (min-width: 980px){
        font-size:56px;
    }
    @media screen and (max-width: 979px){
        font-size:36px;
    }
    
`
const Header:React.FC=()=>{
    return <HeaderStyle> Payment service </HeaderStyle>       
}

export default Header