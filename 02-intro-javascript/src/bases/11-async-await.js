
// Async & await

const getImagen = async() =>{
    try {
    const apiKey = 'm7373f4zNiOvHePevCVICsRp4XJ4Hg20';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json(); //el await siempre va dentro de una función asincrona

    //Desdestructurar el objeto
    const { url } = data.images.original;

    //Mostrar en un documento de html
        const img = document.createElement('img')
        img.src = url;
        document.body.append( img );    

    } catch (error) {
        //manejo del error
        console.error( error );
    }
}
getImagen();
