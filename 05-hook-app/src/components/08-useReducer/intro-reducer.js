console.log('Hola mundo !!!');

const dictComprar = 'Comprar ';
const initialState = [{
    id: 1,
    todo: dictComprar + 'pan',
    done: false
}];

const todoReduce = ( state = initialState, action ) => {
    if ( action?.type === 'agregar') {
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReduce();

const newTodo = {
    id: 2,
    todo: dictComprar + 'leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReduce( todos, agregarTodoAction );

console.log(todos)