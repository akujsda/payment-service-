import React from 'react';
import loadingAnimation from './images/loading.svg';

interface Props{
    isLoadiengActive:boolean;
}

export const Loading:React.FC<Props>=({
  isLoadiengActive,
}):React.ReactElement | null=> {
  if (isLoadiengActive) {
    return <img src={loadingAnimation} alt="loading" className="loading" />;
  } else return null;
};
