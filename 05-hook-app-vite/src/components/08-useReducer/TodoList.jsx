import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ( { state = [], onDeleteTodo } ) => {
  return (
    <ul className='list-group'>
      {
        state.map( ( todo, i ) => (
          <TodoItem key={ todo.id } num={ i } todo={ todo } onDeleteTodo={ onDeleteTodo } />
        ) )
      }
    </ul>
  )
}

TodoList.propTypes = {
  state: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};