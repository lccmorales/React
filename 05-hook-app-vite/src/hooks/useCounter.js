import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
  const [ counter, setCounter ] = useState( initialState );

  const increment = ( value = 1 ) => {
    setCounter( counter + value );
  };

  const reset = () => {
    setCounter( initialState );
  };

  const decrement = ( value = 1 ) => {
    setCounter( counter - value );
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
