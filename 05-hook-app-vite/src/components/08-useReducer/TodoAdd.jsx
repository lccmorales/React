import PropTypes from 'prop-types';
import { useForm } from '../../hooks';

export const TodoAdd = ( { onNewTodo } ) => {
  const { description, onHandleInputChange, onHandleReset } = useForm( {
    description: ''
  } );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    if ( description.trim().length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    onNewTodo( newTodo );
    onHandleReset();
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type='text' className='form-control' name='description'
        value={ description } onChange={ onHandleInputChange }
        placeholder='Pendiente...' autoComplete='off' />
      <button type='submit' className='btn btn-outline-primary mt-1 w-100'>
        Agregar
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired
};