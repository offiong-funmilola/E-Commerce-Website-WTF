import { useState, useContext } from 'react';
import ProductsContext from '../Context/ProductsContext';


function Category() {
    // const [selection, setSelection] = useState([]);
    const [range, setRange] = useState([]);


    const {name, selection, setSelection} = useContext(ProductsContext);

    const selectionHandler = (e) => {
        // Destructuring
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
          
    const rangeHandler = (e) => {
        const { name, checked } = e.target;
          if (checked) {
            let currentRange = [...range]
            currentRange.push(name)
            setRange(currentRange)
        } else {
            let currentRange = range.filter(i => i !== name)
            setRange(currentRange)
        }

    }
    
    //console.log({selection});
    // console.log({range});

  return (
    <div className='w-[250px] h-[1081px] px-8 mt-4 hidden md:block'>
        <div>
            <h1 className='font-bold text-black mb-3'>Category</h1>
            {name.map((category, index) => (
                <div className='mb-3' key={index}> 
                    <label htmlFor={category}>
                        <input type='checkbox' name={category} className='mr-3'  onChange={selectionHandler} />
                        {category}
                    </label> 
                </div>
                ))}   
            
                
            {/* <div className='mb-3'> 
                <label htmlFor='premium'>
                    <input type='checkbox' name='premium' checked={category.includes('premium')} onChange={categoryHandler} className='mr-3' />
                    Premium
                </label>     
            </div>
            <div className='mb-3'>
                <label htmlFor='pets'>
                    <input type='checkbox' name='pets' checked={category.includes('pets')} onChange={categoryHandler} className='mr-3' />
                    Pets
                </label>   
            </div>
            <div className='mb-3'>
                <label htmlFor='food'>
                    <input type='checkbox' name='food' checked={category.includes('food')} onChange={categoryHandler} className='mr-3'/>
                    Food
                </label>   
            </div>
            <div className='mb-3'>
                <label htmlFor='landmarks'>
                    <input type='checkbox' name='landmark' checked={category.includes('landmark')} onChange={categoryHandler} className='mr-3'/>
                    Landmarks
                </label>   
            </div>
            <div className='mb-3'> 
                <label htmlFor='cities'>
                    <input type='checkbox' name='cities' checked={category.includes('cities')} onChange={categoryHandler} className='mr-3'/>
                    cities
                </label>  
            </div>
            <div className='mb-6'> 
                <label htmlFor='nature'>
                    <input type='checkbox' name='nature' checked={category.includes('nature')} onChange={categoryHandler} className='mr-3'/>
                    Nature
                </label>  
            </div> */}
        </div>
        <hr className='boder-2 border-solid border-slate-300'></hr>
        <div>
            <h1 className='font-bold text-black mb-5 mt-6'>Price Range</h1>
            <div className='mb-3'>
                <label htmlFor='below20'>
                    <input type='checkbox' name='below20' checked={range.includes('below20')} onChange={rangeHandler} className='mr-3' />
                    lower than $20
                </label>   
            </div>
            <div className='mb-3'>
                <label htmlFor='above20'>
                    <input type='checkbox' name='above20' checked={range.includes('above20')} onChange={rangeHandler} className='mr-3' />
                    $20 - $100
                </label>
            </div>
            <div className='mb-3'> 
                <label htmlFor='above100'>
                    <input type='checkbox' name='above100' checked={range.includes('above100')} onChange={rangeHandler} className='mr-3' />
                    $100 - $200
                </label> 
            </div>
            <div className='mb-3'>
                <label htmlFor='above200'>
                    <input type='checkbox' name='above200' checked={range.includes('above200')} onChange={rangeHandler} className='mr-3' />
                    more than $200
                </label>     
            </div>
        </div>
    </div>
  )
}

export default Category
