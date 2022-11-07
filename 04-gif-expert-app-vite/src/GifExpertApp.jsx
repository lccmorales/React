import { useState } from "react";
import { AddForm, GifGrid } from './components';

export const GifExpertApp = ( { defaultCategories = []} ) => {
    const [ categories, setCategories ] = useState( defaultCategories );
    const [ limitNumGifs, setLimitNumGifs ] = useState(2);
    
    const onAddForm = ( newCategory, newLimitNumGif ) => {
        console.log(newCategory, ' - ', newLimitNumGif);
        if ( categories.includes(newCategory) )  return;
        setCategories([ newCategory, ...categories ]);
        setLimitNumGifs( parseInt(newLimitNumGif) );
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* <AddForm setCategories={ setCategories } setLimitNumGifs={ setLimitNumGifs }/> */}
            <AddForm onNewForm = { (cat, limit) => onAddForm(cat, limit) }/>
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