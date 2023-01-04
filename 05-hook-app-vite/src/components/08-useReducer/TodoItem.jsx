import PropTypes from 'prop-types';

export const TodoItem = ( { num, todo, onDeleteTodo } ) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className='align-self-center'>{ num + 1 }. { todo.description }</span>
      <button className='btn btn-danger' onClick={ onDeleteTodo }>
        Borrar
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  num: PropTypes.number.isRequired,
  todo: PropTypes.object.isRequired
};