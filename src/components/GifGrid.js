import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGif } from '../helpers/GetGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    //console.log(data);
    //console.log(loading);

    /*const [images, setImages] = useState([])

    useEffect( ()=> {
         getGif(category)
        .then(setImages)
    },[category])*/

   //&& forma corta de operador alternario, si loading es true(&&) entonces <p>Loaging</p>} 

  
    return ( //utilizando GifGridItem.js, <></> es el fragmen, sirve para agrupar los objetos y asi el return no envia error
        <> 
            <h3>{category}</h3>
          
              {loading && <p className="animate__animated animate__flash" >Loading</p>} 
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
