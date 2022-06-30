export const retornaPersona = ({ clave, nombre, edad, rango = 'Capitán' }) => {
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