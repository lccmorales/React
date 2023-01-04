import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
  }, {
    id: new Date().getTime() * 3,
    description: 'Aprender Python',
    done: false
  }
]

export const TodoApp = () => {
  const [ state, dispatch ] = useReducer( todoReducer, initialState );
  // console.log( state );

  const handleDelete = ( e ) => {
    dispatch( {
      type: 'delete'
    } );
  }

  const handleNewTodo = ( todo ) => {
    dispatch( {
      type: 'add',
      payload: todo
    } );
  }

  return (
    <div>
      <h1>TodoApp: { state.length }, <small>Pendientes: 0</small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList state={ state } onDeleteTodo={ handleDelete } />
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