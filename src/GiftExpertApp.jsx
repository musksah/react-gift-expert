import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setcategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        setcategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory 
                onNewCategory = { value => onAddCategory(value) }
            />

            {  
                categories.map( category =>(
                        <GifGrid key={ category } category={ category }/>
                    )
                )
            } 
        </>
    )
}