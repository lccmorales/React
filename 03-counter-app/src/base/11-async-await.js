
/* const getImagenPromesa = () => new Promise ( (resolve) =>
        resolve('https://ajskw4r4wre.com')); */
// getImagenPromesa().then( console.log);

export const getImagen = async() => {
    try {
        const apiKey = 'wGFpRizoH8FkJI4Dbmue2wSoctrFUqGq';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
    } catch (error) {
        // manejo del error
        return 'No existe la imagen';
    }
}

getImagen();

// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//         console.log(url)
//     })
//     .catch( console.warn )