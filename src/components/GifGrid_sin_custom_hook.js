import React, {useEffect, useState} from 'react'
import { getGif } from '../helpers/GetGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect( ()=> {//useEffect se utiliza para ejecutar un codigo o funcion en especifico, para no ejecutar todo nuevaente
        //getGif();
        getGif(category)
        .then(setImages)
    },[category])

    /*const getGif = async ()=> { //se creo GetGifs.js en la carpeta helpers

        //const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=sEoYy7HUDlwl1pQTTkJyeGgXtIdFBSvY';
        const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=sEoYy7HUDlwl1pQTTkJyeGgXtIdFBSvY`;
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //el ? es para indicar que si trae imagenes las utilice.
            }
        })
        console.log(gifs);
        setImages(gifs);
    }*/



   // getGif();

   /* return ( //funciona sin utilizar GifGridItem.js
        <>
            <h3>{category}</h3>
            <ol>
             {
                 images.map( img => (// el map con parentesis en lugar de las llaves tienen un return implicito
                     <li key= {img.id}>{img.title} </li>
                 ))
             }
            </ol>
          
        </>
    )*/

    return ( //utilizando GifGridItem.js, <></> es el fragmen, sirve para agrupar los objetos y asi el return no envia error
        <> 
            <h3>{category}</h3>
            <div className="card-grid">
                
                {
                    images.map( img => (// el map con parentesis en lugar de las llaves tienen un return implicito
                        <GifGridItem 
                            key={img.id}
                            {...img} // los ... es para enviar las propiedades de la imagen independientes
                        />
                    ))
                }
                
            
            </div>
        </>
    )


}
