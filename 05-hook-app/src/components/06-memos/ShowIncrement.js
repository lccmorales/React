import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = memo(({ increment }) => {
    console.log('Me volvi a generar');
    return (
        <button className='btn btn-primary'
            onClick={() => {
                increment( 5 );
            }}>
                Incrementar
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
};
