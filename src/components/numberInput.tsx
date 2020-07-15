import React from 'react';
import MaskedInput from 'react-text-mask'

interface Props{
    stateOperator:string;
    handlePhoneNumber:(event: React.ChangeEvent<HTMLInputElement>)=> void;
}

const NumberInput:React.FC<Props>=({
    stateOperator,
    handlePhoneNumber,
})=> {
    if (stateOperator !== "All"){
        return <MaskedInput
                    placeholder="Enter your phone number"
                    mask={['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                    onBlur={handlePhoneNumber}
                    id="my-input-number-id"
                    autoComplete="off"
                />
    }
    return null
}

export default NumberInput;
