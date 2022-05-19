import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category, limitNumGifs ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category, limitNumGifs )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [ category, limitNumGifs ]);


    return state; // {data: [], loading: true}
}
