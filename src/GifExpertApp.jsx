
import {useState} from 'react';
import {AddCategory, GifGrid} from './components';
import image from './images/logo.png'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Valorant'])

    const ArrCategories = categories.length
    // Funcion Agregar Categoria
    const onAddCategory = ( newCategory ) => {

        console.log(newCategory);

        if (categories.includes(newCategory)) return;

        setCategories( [newCategory, ...categories]);
        
    };

    // Funcion Borrar una Categoria
    const onDeleteCategory = (name) => {

        if (categories.length <= 1) return  // Validar debe haber mas de 1 para borrar 
        const delcategories = categories.filter((categories) => categories !== name);

        setCategories(delcategories)
    };



    return (
        <div className='Conteneder_Full'>
            <h1 className='title'>Gif Expert App</h1>
            <div className='Contenedor_Logo'>
                <img src={image} alt="Logo" className='Logo' />
            </div>
            
            
            <AddCategory onNewCategory={ event => onAddCategory(event)}/>
            <br /><br />
            {categories.map( category => (
                    <GifGrid  key={category} category={category} onDelCategory={onDeleteCategory} categories={ArrCategories}/>
                )
            )}

        </div>
    )
}
