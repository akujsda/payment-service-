import React from 'react';
import {Link} from 'react-router-dom';

interface Props{
    id:string;
    picture:string;
    stateOperator:string;
}

export const Operators:React.FC<Props>=({
  id,
  picture,
  stateOperator,
}):React.ReactElement | null=> {
  if (stateOperator === 'All') {
    return <Link to="./numberinput">
      <img className="allOperators operatorImage"
        id={id}
        src={picture}
        alt="pic"/>
    </Link>;
  } else if (stateOperator===id) {
    return <img className="chosenOperator operatorImage"
      id={id}
      src={picture}
      alt="pic"/>;
  } else {
    return null;
  }
};


