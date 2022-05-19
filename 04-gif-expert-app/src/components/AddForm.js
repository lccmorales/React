import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddForm = ( { setCategories, setLimitNumGifs } ) => {
    const [inputValueSearch, setInputValueSearch] = useState('');
    const [inputValueLimit, setInputValueLimit] = useState('');

    const handleInputSearchChange = (e) => {
        setInputValueSearch(e.target.value);
    }

    const handleInputLimitChange = (e) => {
        setInputValueLimit(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValueSearch.trim().length > 3 && parseInt(inputValueLimit.trim()) > 0) {
            setCategories( cats => [ inputValueSearch, ...cats,] );
            setInputValueSearch('');
            setLimitNumGifs( parseInt(inputValueLimit) );
            setInputValueLimit('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h3>Busqueda</h3>
            <input
                type="text"
                value={ inputValueSearch }
                onChange={ handleInputSearchChange }
            />

            <h3>Cantidad de Gif's a mostrar</h3>
            <input
                type="number"
                value={ inputValueLimit }
                onChange={ handleInputLimitChange }
            />

            <button type="submit">Buscar</button>
        </form>
    )
}

AddForm.propTypes = {
    setCategories: PropTypes.func.isRequired,
    setLimitNumGifs: PropTypes.func.isRequired
};