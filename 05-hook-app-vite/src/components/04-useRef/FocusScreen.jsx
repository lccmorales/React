import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input ref={ inputRef } type='text' className='form-control' placeholder='Jesus' />

      <button className='btn btn-outline-primary mt-5' onClick={ handleClick } >
        Set Focus
      </button>
    </div>
  )
}