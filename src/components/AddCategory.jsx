import { useState } from 'react';
// Se llaman las props al componente para hacer el cambio de estado
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim())
        setInputValue('');
    }


  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gifs uwu"    
            value={ inputValue }
            onChange={onInputChange}
    
        />
    </form>
  )
}


