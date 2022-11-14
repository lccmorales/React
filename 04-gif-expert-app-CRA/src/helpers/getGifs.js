export const getGifs = async( category, limitNumGifs ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=${ limitNumGifs }&api_key=5jGYTp0SgcsdzdkBbulgPn1pHpR8NHu0`;
    const resp = await fetch ( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    // console.log(gifs);
    return gifs;
}