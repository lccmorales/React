import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category, limitNumGifs ) => {
    const [state, setState] = useState({
        images: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category, limitNumGifs )
            .then( imgs => {
                setState({
                    images: imgs,
                    loading: false
                });
            });
    }, [ category, limitNumGifs ]);


    return state; // {images: [], loading: true}
}
