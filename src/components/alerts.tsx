import React from 'react';
import styled from "styled-components"

interface Props{
    isCorrectNumber?:boolean | undefined;
    isCorrectBalance?:boolean | undefined;
    isReplenishmentSuccessful?:boolean | undefined;
}
const Message=styled.div`
    text-align: center;
    width:100%;
    font-size:28px;
    position: absolute;   
    font-family: 'Do Hyeon', sans-serif;
    color:#01356B; 
`
const MoneyAlert=styled(Message)`
    top:550px;
}
`
const NumberAlert=styled(Message)`   
    top:410px;
}    
`
const ReplanishmentSuccessAlert=styled(Message)`
    top:670px;
}    
`
const ReplanishmentErrorAlert=styled(Message)`
    top:670px;
}  
`
const Alerts:React.FC<Props>=({
    isCorrectNumber,
    isCorrectBalance,
    isReplenishmentSuccessful,
})=> {
    
     if (isCorrectBalance===false){
         return <MoneyAlert>Allowable amount from 1 to 1000 </MoneyAlert>       
     }else if(isCorrectNumber===false){
         return <NumberAlert>Number must be format +7(999) 999-99-99 </NumberAlert>
     }else if( isReplenishmentSuccessful===false){
         return <ReplanishmentErrorAlert>An error has occurred</ReplanishmentErrorAlert>
     }else if( isReplenishmentSuccessful){
        return <ReplanishmentSuccessAlert>Successfull replenishment</ReplanishmentSuccessAlert>
     }
         return null
}
export default Alerts