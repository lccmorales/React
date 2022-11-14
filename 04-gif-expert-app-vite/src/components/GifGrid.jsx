import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category, limitNumGifs } ) => {
    const { images, loading } = useFetchGifs( category, limitNumGifs );

    return (
        <>
        <h3 className='animate__animated animate__flash' aria-label='titulo'>{ category }</h3>

        { loading && <p className='animate__animated animate__flash'>Cargando...</p> }
        
        <div className='card-grid'>
            {
                images.map( img => (
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    limitNumGifs: PropTypes.number.isRequired
}