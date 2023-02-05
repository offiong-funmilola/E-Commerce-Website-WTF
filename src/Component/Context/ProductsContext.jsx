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

    useEffect(()=> {(item) => {
        products.filter((item) => selection.length > 0 && selection.includes(item.category))
            setProducts(item)  
    }}, [])

return (
        <ProductsContext.Provider value={{products, name, selection, setSelection}}>
        {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;     