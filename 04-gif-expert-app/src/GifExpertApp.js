import React, { useState } from 'react';
import { AddForm } from './components/AddForm';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['Arcane', 'Demon Slayer']);
    const [ limitNumGifs, setLimitNumGifs ] = useState(2);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddForm setCategories={ setCategories } setLimitNumGifs={ setLimitNumGifs }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={ category } category={ category } limitNumGifs={ limitNumGifs }/>
                    ))
                }
            </ol>
        </>
    );
}
export default GifExpertApp;