import { useContext, useState } from 'react';
import ProductsContext from '../Context/ProductsContext'



function ProductCard() {
    const { products, selection } = useContext(ProductsContext);

    const [count, setCount] = useState(0);
    
    const filteredProducts = (products, selection) => {
        if (selection.length > 0) {
            return products.filter(product => selection.includes(product.category))
        }
        return products
    };

    const addToCart = () => {
        setCount(count + 1)
    }

    return ( 
        <div className='grid grid-cols-3 grid-rows-3 gap-5'>  
            {filteredProducts(products, selection).map(product => {
                return (
                    <div key={product.id} className="card card-compact w-60 h-96 bg-base-100 rounded-none shadow-xl">
                        <figure className='w-full h-56'><img src={product.thumbnail} alt="product-pics" className='w-full h-full object-cover' /></figure>
                        <div>
                            <div className='w-full h-10 bg-black text-white text-extrabold text-xl flex items-center justify-center' onClick={addToCart}>ADD TO CART</div>
                            <p className='text-lg'>{product.category}</p>
                            <h2 className="card-title text-bold">{product.title}</h2>
                            <p className='text-lg'>${product.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard
