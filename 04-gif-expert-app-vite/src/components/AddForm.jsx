import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddForm = ({ onNewForm }) => {
    const [inputValueSearch, setInputValueSearch] = useState('');
    const [inputValueLimit, setInputValueLimit] = useState('');

    const handleInputSearchChange = ({ target }) => {
        setInputValueSearch(target.value);
        // console.log('handleInputSearchChange - llamado');
    }

    const handleInputLimitChange = ({ target }) => {
        setInputValueLimit(target.value);
        // console.log('handleInputLimitChange - llamado');
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
        <form onSubmit={ handleSubmit } aria-label='form'>
            {/* <p>{ inputValueSearch }</p>
            <p>{ inputValueLimit }</p> */}
            <h3>Busqueda</h3>
            <input
                className='txtSearch'
                aria-label='txtSearch'
                type="text"
                value={ inputValueSearch }
                onChange={ handleInputSearchChange }
            />

            <h3>Cantidad de Gif's a mostrar</h3>
            <input
                className='txtAmount'
                aria-label='txtAmount'
                type="number"
                value={ inputValueLimit }
                onChange={ handleInputLimitChange }
            />

            <button type="submit">Buscar</button>
        </form>
    )
}

AddForm.propTypes = {
    onNewForm: PropTypes.func.isRequired
}