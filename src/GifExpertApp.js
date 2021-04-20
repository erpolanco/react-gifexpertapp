import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';




export const GifExpertApp = () => {
//const categories = ['One Punch ',' Samurai X ',' Dragon Ball '];
const [categories, setCategories] = useState([' Samurai X ']);

        //const handleAdd = () => {
        //    setCategories([...categories,'Hunter']);
        //}
    return(
        <>
         <h1> GifExpertApp </h1>
         <AddCategory setCategories={setCategories} />
         <hr />

         
            <ol>
                {
                   /* categories.map(category => {
                        return <li key={category} > {category} </li> primer ejercicio hasta AddCategory
                    })*/
                    categories.map(category => (
                       
                         <GifGrid 
                            key = {category}
                            category={category} 
                         />
                    ))
                }
                
            </ol>

           
        </>
    );
    



}

export default GifExpertApp;