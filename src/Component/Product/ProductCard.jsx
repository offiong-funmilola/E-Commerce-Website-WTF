import { useContext } from 'react';
import ProductsContext from '../Context/ProductsContext'


function ProductCard() {
    const { products }= useContext(ProductsContext);
    //console.log(products);

  return ( 
    <div className='grid grid-cols-3 grid-rows-3 gap-5'>  
        {products.map(product => {
            return (
                <div key={product.id} className="card card-compact w-64 h-96 bg-base-100 rounded-none shadow-xl">
                    <figure><img src={product.thumbnail} alt="product-pics" /></figure>
                    <div className="card-body">
                        <div>ADD TO CART</div>
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.price}</p>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default ProductCard
