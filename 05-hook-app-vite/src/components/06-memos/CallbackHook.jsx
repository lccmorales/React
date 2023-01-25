import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [ counter, setCounter ] = useState(10);
  const incrementFather = useCallback((num) => {
    setCounter(c => c + num);
  }, [ setCounter ]);

  return (
    <div>
      <h1>useCallbackHook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementFather } num={5} />
    </div>
  );
}
