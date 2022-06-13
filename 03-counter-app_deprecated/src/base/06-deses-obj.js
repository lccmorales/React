// Desestructuración de Objetos
// Asignación Desestructurante
const persona = {
    nombre: 'Jesús',
    edad: 41,
    clave: 'IronMan'
};

// const { nombre, edad, clave } = persona;

/* console.log( nombre );
console.log( edad );
console.log( clave ); */

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.5465,
            lng: -12.553
        }
    }
}

const { nombreClave, anios, latlng:{lat, lng} } = retornaPersona( persona );
console.log(nombreClave, anios);
console.log( lat, lng )