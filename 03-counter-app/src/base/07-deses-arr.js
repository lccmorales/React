const personajes = ['Goku', 'Vegeta', 'Gohan'];
const [ , ,p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valro del arr se llamará nombre
// 2. se llamará setNombre
const stateUse = ( valor ) => {
    return [ valor, () => {console.log('Hola Mundo')}];
}

const [ nombre, setNombre ] = stateUse ('Goku');
console.log( nombre );
setNombre();