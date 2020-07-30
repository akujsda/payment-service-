import React from 'react';
import MaskedInput from 'react-text-mask';
import {useFormik} from 'formik';
import {Alerts} from './alerts';
import {Loading} from './loading';
import translate from '../i18n/messages/translate';
import {useIntl} from 'react-intl';
import * as Yup from 'yup';

interface MyForm{
    startLoading:()=>void,
    stateOperator:string,
    isLoadiengActive:boolean;
    isReplenishmentSuccessful?:boolean;
}

interface InitValues{
  phoneNumber: string;
  sum: string;
}
const initialValues:InitValues={
  phoneNumber: '',
  sum: '',
};

const FormField:React.FC<MyForm>=({
  startLoading,
  stateOperator,
  isLoadiengActive,
  isReplenishmentSuccessful,
}):React.ReactElement | null=>{
  const intl=useIntl();
  const validationSchema=Yup.object({
    phoneNumber:Yup.string()
      .required('required')
      .test('numberCheck', 'incorrectNumber', function():any{
        if (formik.values.phoneNumber.includes('_', 0)===true || formik.values.phoneNumber[3] !=='9'){      
        return false
        }else {
          return true
        }
      }),
    sum:Yup.string()
      .required('required')
      .test('sumCheck', 'allowableAmount', function(){
        const correctAmount:boolean =+formik.values.sum>1000;
        if (correctAmount===true){       
          return false
        }else
        return true
      }),

  })
  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema
  });


 async function onSubmit() {
    startLoading();
    formik.values.phoneNumber="";
    formik.values.sum="";
    formik.errors.phoneNumber=undefined;
    formik.errors.sum=undefined;
    formik.touched.phoneNumber=false;
    formik.touched.sum=false;   
  }

  let button;
  if (formik.errors.phoneNumber || formik.errors.sum || isLoadiengActive===true || formik.values.phoneNumber==="" || formik.values.sum==="" ) {
    button=null;
  } else {
    button=<button type="submit"
      onClick={onSubmit}
      id="button">{`${intl.messages.Replenishment}`}</button>;
  }
  
  if (stateOperator !== 'All') {
    return (
      <>
        <form className="numberInput">
          <MaskedInput
            placeholder={`${intl.messages.enterPhoneNumber}`}
            mask={['+', '7', '(', /[1-9]/, /\d/, /\d/, ')',
              ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,
              '-', /\d/, /\d/]}
            id="my-input-number-id"
            autoComplete="off"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            type="text"
          />

          {formik.touched.phoneNumber && formik.errors.phoneNumber ?
        <div id="phoneError" className="errorMessage" >
          {translate(formik.errors.phoneNumber)}</div>: null }


          <MaskedInput
            placeholder={`${intl.messages.paymentAmount}`}
            mask={[/[1-9]/, /\d/, /\d/, /\d/]}
            id="my-input-balance-id"
            placeholderChar=" "
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sum}
            name="sum"
            type="text"
          />
          {formik.touched.sum && formik.errors.sum ?
         <div id="sumError"
           className="errorMessage"
         >{translate(formik.errors.sum)}</div>: null }
          {button}
          <Alerts
            isReplenishmentSuccessful={isReplenishmentSuccessful}
          />
          <Loading isLoadiengActive={isLoadiengActive} />
        </form>


      </>
    );
  } else {
    return null;
  }
};

export default FormField;
