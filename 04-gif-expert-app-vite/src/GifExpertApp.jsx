import { useState } from "react";
import { AddForm } from './components/AddForm';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( { defaultCategories = []} ) => {
    const [ categories, setCategories ] = useState( defaultCategories );
    const [ limitNumGifs, setLimitNumGifs ] = useState(2);
    
    return (
        <>
            <h1>GifExpertApp</h1>
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

