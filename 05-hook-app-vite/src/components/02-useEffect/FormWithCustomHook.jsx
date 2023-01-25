import { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
  const { formValues, onHandleInputChange, onHandleReset, name, email, password } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [ mostrarError, setMostrarError ] = useState(0);
  //   const { name, email, password } = formValues;

  useEffect(() => {
    setMostrarError(0);
  }, [ formValues ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setMostrarError(1);
      return;
    }
    console.log(formValues);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={ name }
          onChange={ onHandleInputChange }
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='email@ejemplo.com'
          autoComplete='off'
          value={ email }
          onChange={ onHandleInputChange }
        />
      </div>

      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='********'
          value={ password }
          onChange={ onHandleInputChange }
        />
      </div>

      <button type='submit' className='btn btn-primary mt-2'>
        Guardar
      </button>

      <button type='button' onClick={ onHandleReset } className='btn btn-danger mt-2'>
        Borrar
      </button>

      { mostrarError === 1 && <div>Todos los campos son requeridos.</div> }
    </form>
  );
};
