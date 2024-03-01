import { useEffect,useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() =>{
        const newImages = await getGifs(category)
        console.log(newImages);
        setImages(newImages);
        setIsLoading(false);
        
    }

    //Funcion borrar imagen de la categoria
    const delImage = (llave) =>{
        if (images.length == 1) {
            return
        }
        const nuevoArray = images.filter((images) => images.id !== llave);
        setImages(nuevoArray);

    }

    useEffect( () => {
        getImages();
    }, [ ]);

    return{
        images:images,
        isLoading:isLoading,
        delImage
    }
}
