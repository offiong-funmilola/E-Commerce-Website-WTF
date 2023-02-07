import { useEffect, useState, createContext } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [selection, setSelection] = useState([]);
    const [name, setName] = useState([]);

    const fetchData = () => {
        fetch('https://dummyjson.com/products').then((res)=>res.json())
        .then((data)=> setProducts(data.products))
        .catch((error) => console.log('error.message'))
    };

    useEffect(()=> {
        fetchData();
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch('https://dummyjson.com/products/categories').then((res)=>res.json())
        .then((categories)=> setName(categories));
    }

    const selectionHandler = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            let currentSelection = [...selection]
            currentSelection.push(name)
            setSelection(currentSelection)
        } else {
            let currentSelection = selection.filter(i => i !== name);
            setSelection(currentSelection);
        }
    }
   
return (
        <ProductsContext.Provider value={{products, name, selection, selectionHandler}}>
        {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;     