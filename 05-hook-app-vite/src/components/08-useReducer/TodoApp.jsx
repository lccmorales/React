import { useTodo } from '../../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const { state, todosCount, pendingTodosCount, handleDelete, handleNewTodo, handleToggleTodo} = useTodo();
  return (
    <div>
      <h1>TodoApp: { todosCount }, <small>Pendientes: { pendingTodosCount }</small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList state={ state } onDeleteTodo={ handleDelete } onToggleTodo={ handleToggleTodo } />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </div>
  )
}