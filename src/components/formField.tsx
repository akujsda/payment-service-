import React from 'react';
import MaskedInput from 'react-text-mask';
import {useFormik} from 'formik';
import {Alerts} from './alerts';
import {Loading} from './loading';
import translate from '../i18n/messages/translate';
import {useIntl} from 'react-intl';

interface MyForm{
    startLoading:()=>void,
    stateOperator:string,
    isLoadiengActive:boolean;
    isReplenishmentSuccessful:boolean | undefined;
}

interface InitValues{
  phoneNumber: string | undefined;
  sum: string | undefined;
}
const initialValues:InitValues={
  phoneNumber: undefined,
  sum: undefined,
};

const FormField:React.FC<MyForm>=({
  startLoading,
  stateOperator,
  isLoadiengActive,
  isReplenishmentSuccessful,
}):React.ReactElement | null=>{
  const formik = useFormik({
    validate,
    onSubmit,
    initialValues,
  });
  const intl=useIntl();

  function validate(values:any):object {
    const errors={
      phoneNumber: '',
      sum: '',
    };

    const correctAmount:boolean = +values.sum<1 || +values.sum>1000;
    if (!values.phoneNumber) {
      errors.phoneNumber='required';
    } else if (values.phoneNumber.includes('_', 0)===true ||
     values.phoneNumber[3] !=='9') {
      errors.phoneNumber='incorrectNumber';
    } else errors.phoneNumber='';

    if (!values.sum) {
      errors.sum='required';
    } else if (correctAmount===true) {
      errors.sum='allowableAmount';
    } else errors.sum='';

    return errors;
  }


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
  if (formik.errors.phoneNumber ||
      formik.errors.sum ||
      formik.errors.phoneNumber===undefined ||
      formik.errors.sum===undefined ||
      isLoadiengActive===true) {
    button=undefined;
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
