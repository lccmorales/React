import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ( { state = [], onDeleteTodo, onToggleTodo } ) => {
  return (
    <ul className='list-group'>
      {
        state.map( ( todo, i ) => (
          <TodoItem key={ todo.id } num={ i } todo={ todo }
            onDeleteTodo={ onDeleteTodo }
            onToggleTodo={ onToggleTodo } />
        ) )
      }
    </ul>
  )
}

TodoList.propTypes = {
  state: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};