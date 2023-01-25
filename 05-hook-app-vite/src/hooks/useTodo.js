import { useEffect, useReducer, useState } from 'react';
import { todoReducer } from '../components/08-useReducer/todoReducer';

const init = () => {
  return JSON.parse( localStorage.getItem( 'state' ) ) || [];
};

export const useTodo = () => {
  const [ state, dispatch ] = useReducer( todoReducer, [], init );

  useEffect( () => {
    localStorage.setItem( 'state', JSON.stringify( state ) || [] );
  }, [ state ] );

  const handleDelete = ( id ) => {
    dispatch( {
      type: 'delete',
      payload: id
    } );
  };

  const handleNewTodo = ( todo ) => {
    dispatch( {
      type: 'add',
      payload: todo
    } );
  };

  const handleToggleTodo = ( id ) => {
    dispatch( {
      type: 'toogle',
      payload: id
    } );
  };

  return {
    state,
    todosCount: state.length,
    pendingTodosCount: state.filter( todo => !todo.done ).length,
    handleDelete,
    handleNewTodo,
    handleToggleTodo,
  }
}