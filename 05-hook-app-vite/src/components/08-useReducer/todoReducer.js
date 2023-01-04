export const todoReducer = ( state = [], action ) => {
  switch ( action.type ) {
    case 'add':
      return [ ...state, action.payload ];
    case 'delete':
      throw new Error( 'action.type = delete - No esta implementada' );
    default:
      return state;
  }
};