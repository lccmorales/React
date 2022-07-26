import React, { useState } from 'react';

export const AddForm = ({ onNewForm }) => {
    const [inputValueSearch, setInputValueSearch] = useState('');
    const [inputValueLimit, setInputValueLimit] = useState('');

    const handleInputSearchChange = (e) => {
        setInputValueSearch(e.target.value);
        console.log('handleInputSearchChange - llamado');
    }

    const handleInputLimitChange = (e) => {
        setInputValueLimit(e.target.value);
        console.log('handleInputLimitChange - llamado');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit - llamado', inputValueSearch);
        if (inputValueSearch.trim().length > 3 && parseInt(inputValueLimit.trim()) > 0) {
            // setCategories( cats => [ inputValueSearch, ...cats,] );
            // setLimitNumGifs( parseInt(inputValueLimit) );
            onNewForm( inputValueSearch.trim(), inputValueLimit.trim() );
            setInputValueSearch('');
            setInputValueLimit('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            {/* <p>{ inputValueSearch }</p>
            <p>{ inputValueLimit }</p> */}
            <h3>Busqueda</h3>
            <input
                className='search'
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