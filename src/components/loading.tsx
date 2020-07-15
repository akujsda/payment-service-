import React from 'react';
import loadingAnimation from "./images/loading.svg"
import styled from "styled-components"

interface Props{
    isLoadiengActive:boolean;
}

const LoadingStyled=styled.img`
    transition: all 1s ease 0s;
    position: absolute;
    width:350px;
    height:350px;
    top: 180px;
`

const Loading:React.FC<Props>=({
    isLoadiengActive,
})=> {
    
   if (isLoadiengActive){
return <LoadingStyled src={loadingAnimation} alt="loading" />      
    }else return null
}
export default Loading