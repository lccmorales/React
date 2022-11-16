import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('Hola !!!');
  }, []); // para que se dispare una sola vez, al menos poner un arreglo vacio

  useEffect(() => {
    // console.log('FormState cambio')
  }, [formState]);

  useEffect(() => {
    // console.log('Email cambio')
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control mt-2'
          placeholder='email@ejemplo.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}
    </>
  );
};
