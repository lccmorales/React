const nombre = 'Jesus';
const apellido = 'Morales';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre }\n${ apellido }`;

// console.log( nombreCompleto );

export function getSaludo(nombre = 'Carlos!') {
    return 'Hola ' + nombre;
};

// console.log( `Este es un texto: ${ getSaludo( nombre ) } `);