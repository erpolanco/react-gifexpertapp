

export const getGif = async (category)=> {

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
    return gifs;
}
