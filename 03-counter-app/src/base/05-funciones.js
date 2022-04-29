// Funciones en JS

const saludar = function( nombre ) {
    return `Hola, $ { nombre }`;
}

const saludar2 = function( nombre ) {
    return `Hola, $ { nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4('Vegeta') );


const getUser = () => ({
    uid: 'ABC123',
    username: 'CSWEB'
});

const user = getUser();
console.log( user );

// Tarea
// 1. Trasnformen a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas 
function getUsuarioActivo ( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'ABC569',
    username: nombre
});

const usuarioActivo  = getUsuarioActivo('Fernando');
const usuarioActivo2 = getUsuarioActivo2('Jesús');
console.log( usuarioActivo );
console.log( usuarioActivo2 );