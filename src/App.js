import Category from './Component/Product/Category';
import SortMenu from './Component/Product/SortMenu';
import ProductCard from './Component/Product/ProductCard';
import {ProductsProvider} from './Component/Context/ProductsContext';



function App() {

  return (
    <ProductsProvider>
      <div>
        <h1 className="text-5xl font-bold underline text-center">
          HELLO TEAM FRONTEND!
        </h1>
        <div className='w-full h-screen'>
          <SortMenu />
          <div className='flex justify-between'>
          <Category /> 
          <ProductCard />
          </div> 
        </div> 
      </div>
    </ProductsProvider>
  );
}

export default App
