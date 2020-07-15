import React from 'react';
import MaskedInput from 'react-text-mask'

interface Props{
    stateOperator:string;
    handleAmount:(event: React.ChangeEvent<HTMLInputElement>)=> void;
}

const SumInput:React.FC<Props>=({
    stateOperator,
    handleAmount,
})=> {
    if (stateOperator !== "All"){
        return <MaskedInput
                    placeholder="Paument amount"
                    mask={[/[1-9]/,/\d/, /\d/, /\d/,]}
                    onBlur={handleAmount}
                    id="my-input-balance-id"
                    placeholderChar=" "
                    autoComplete="off"
                />
    }return null

}
export default SumInput