import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState( value );

    //handleReset
    const handleReset = () => setCounter ( value );
    
    //handleSub
    const handleSub = () => setCounter ( counter - 1 );
    
    //handleAdd
    const handleAdd = () => {
        setCounter ( counter + 1 );
        // setCounter((c) => c + 1);
    }

    return (
      <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick = { handleSub } >-1</button>
        <button onClick = { handleReset } aria-label="btn-reset" >Reset</button>
        <button onClick = { handleAdd } >+1</button>
      </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 25
}