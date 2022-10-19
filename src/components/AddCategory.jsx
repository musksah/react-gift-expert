import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChanged = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        // onAddCategory( categories => [...categories, inputValue] );
        setinputValue('');
    }

    return(
        <form onSubmit={ onSubmit }>
            <input
                type = "text"
                placeholder = "Buscar Gifts"
                value = { inputValue }
                onChange = { onInputChanged }
            />
        </form>
    )
}