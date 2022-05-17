import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Arcane', 'Berserk'];
    const [categories, setCategories] = useState(['Arcane']);

    // const handleAdd = () => {
    //     setCategories ( cats => [...cats, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            {/* <button onClick = { handleAdd } >Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={ category } category={ category }/>
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;