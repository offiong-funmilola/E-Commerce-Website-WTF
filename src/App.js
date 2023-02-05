import Category from './Component/Product/Category';
import SortMenu from './Component/Product/SortMenu';
import ProductCard from './Component/Product/ProductCard';
import {ProductsProvider} from './Component/Context/ProductsContext';



function App() {
 
  // const card = products.map(product => {
  //   return (
  //     <ProductCard 
  //     key={product.id} 
  //     image={product.thumbnail} 
  //     title={product.title} 
  //     price={product.price}
  //     />
  //   ) 
  // });

  return (
    <ProductsProvider>
      <div>
        <h1 className="text-5xl font-bold underline text-center">
          HELLO TEAM FRONTEND!
        </h1>
        <SortMenu />
        <div className='flex justify-between'>
        <Category /> 
        <ProductCard />
        </div>  
      </div>
    </ProductsProvider>
  );
}

export default App
