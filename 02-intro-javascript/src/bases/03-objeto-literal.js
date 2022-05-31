const persona = {
    nombre: 'Jesus',
    apellido: 'Morales',
    edad: 42,
    direccion: {
        ciudad: 'Hermosillo',
        zip: 83100,
        lat: 14.2323,
        lng: 34.9562,
    }
};

//console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );