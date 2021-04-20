import React, {useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
const  [inputValue, setinputValue] = useState('Hola Mundo')

const RespuestainputValue = (e) => {
    setinputValue(e.target.value);
       // console.log(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();//para evitar el refresh completo de la pagina
    //console.log('Submit hecho')

    if (inputValue.trim().length > 2){ //trim es para eliminar los espacios en blanco y nulos como en oracle
        setCategories(categories => [inputValue, ...categories]);
        setinputValue('');
    }
    
}

    return (
    
        <form onSubmit={handleSubmit}>
        <h1>{inputValue}</h1>
            <input 
                type="text"
                value={inputValue}
                onChange = {RespuestainputValue}
            />
        </form>

    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
