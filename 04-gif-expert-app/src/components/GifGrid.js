import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category } ) => {
    const { loading} = useFetchGifs();
    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]);

    return (
        <>
        <h3>{ category }</h3>
        { loading ? 'Cargando...' : 'Datos cargados'}
        {/* <div className='card-grid'>
            {
                images.map( img => (
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        </div> */}
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}