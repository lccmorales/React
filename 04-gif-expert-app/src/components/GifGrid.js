import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const GifGrid = ( {category} ) => {

    const [count, setCount] = useState(0);

    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Arcane&limit=10&api_key=wGFpRizoH8FkJI4Dbmue2wSoctrFUqGq';
        const resp = await fetch ( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
    }

    return (
        <>
            <h3>{ category }</h3>
            <h1>{ count }</h1>
            <button onClick = { () => setCount(count + 1) }>+1</button>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}