import React from 'react';
import {Link} from 'react-router-dom';

interface Props{
    stateOperator:string;
}

export const Operators:React.FC<Props>=({
  stateOperator,

}):React.ReactElement | null=> {

  const image:object={
    'megafon':"https://i.ibb.co/M1SbVFr/megafon.png",
    'beeline':"https://i.ibb.co/S3fyvFf/beeline.png",
    'MTC':"https://i.ibb.co/c2Vnhyk/mts.png",
  }
  const imageSrc=Object.values(image);
  const imageId=Object.keys(image);
  let currentOperator:number=imageId.indexOf(stateOperator)
  const operator=Object.entries(image).map(([key, value])=>
    <img className="allOperators operatorImage" id={key} src={value} alt={key} key={key} ></img>
  )

  if (stateOperator === 'All') {
    return <Link to="./numberinput">
      {operator}
    </Link>;
  } else if (stateOperator !== "All") {
    return <img className="chosenOperator operatorImage"
      id={stateOperator}
      src={imageSrc[currentOperator]}
      alt="pic"/>;
  } else {
    return null;
  }
}