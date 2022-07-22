export const getUser = () => ({
    uid: 'ABC123',
    username: 'Prueba'
});

// Tarea
// 1. Trasnformen a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas 
export const getUsuarioActivo = ( nombre ) => {
    return {
        uid: 'ABC567',
        username: nombre
    }
}
// const usuarioActivo  = getUsuarioActivo('Fernando');
// const usuarioActivo2 = getUsuarioActivo2('Jesús');
// console.log( usuarioActivo );
// console.log( usuarioActivo2 );