import { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
  return JSON.parse( localStorage.getItem( 'state' ) ) || [];
};

export const TodoApp = () => {
  const [ state, dispatch ] = useReducer( todoReducer, [], init );

  useEffect( () => {
    localStorage.setItem( 'state', JSON.stringify( state ) || [] );
  }, [ state ] )

  const handleDelete = ( id ) => {
    dispatch( {
      type: 'delete',
      payload: id
    } );
  }

  const handleNewTodo = ( todo ) => {
    dispatch( {
      type: 'add',
      payload: todo
    } );
  }

  const handleToggleTodo = ( id ) => {
    dispatch( {
      type: 'toogle',
      payload: id
    } );
  }

  return (
    <div>
      <h1>TodoApp: { state.length }, <small>Pendientes: 0</small></h1>
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