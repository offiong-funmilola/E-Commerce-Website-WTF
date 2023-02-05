import React from 'react'

function MobileCategory() {
  return (
    <div className='bg-gray-200 h-[200px] mt-2 overflow-scroll pl-3 block w-fit md:hidden'>
        <div>
            <h1 className='font-bold text-black mb-2'>Category</h1>
            <div className='mb-2'>  
                <input type='checkbox' name='people'/>
                <span className='ml-3 text-xs'>People</span>
            </div>
            <div className='mb-2'>  
                <input type='checkbox' name='premium'/>
                <span className='ml-3 text-xs'>Premiunm</span>
            </div>
            <div className='mb-2'>  
                <input type='checkbox' name='pets' />
                <span className='ml-3 text-xs'>Pets</span>
            </div>
            <div className='mb-2'>  
                <input type='checkbox' name='food' />
                <span className='ml-3 text-xs'>Food</span>
            </div>
            <div className='mb-2'>  
                <input type='checkbox' name='landmark'/>
                <span className='ml-3 text-xs'>Landmarks</span>
            </div>
            <div className='mb-2'>  
                <input type='checkbox' name='cities'/>
                <span className='ml-3 text-xs'>Cities</span>
            </div>
            <div className='mb-4'>  
                <input type='checkbox' name='nature'/>
                <span className='ml-3 text-xs'>Nature</span>
            </div>
        </div>
        <hr className='boder-2 border-solid border-slate-300'></hr>
        <div>
            <h1 className='font-bold text-black mb-5 mt-4'>Price Range</h1>
            <div className='mb-2'>  
                <input type='checkbox' name='below20'/>
                <span className='ml-3 text-xs'>lower than $20</span>
            </div>
            <div className='mb-2'>  
                <input type='checkbox' name='above20'/>
                <span className='ml-3 text-xs'>$20 - $100</span>
            </div>
            <div className='mb-2'>  
                <input type='checkbox' name='above100'/>
                <span className='ml-3 text-xs'>$100 - $200</span>
            </div>
            <div className='mb-2'>  
                <input type='checkbox' name='above200'/>
                <span className='ml-3 text-xs'>more than $200</span>
            </div>
        </div>
    </div>
  )
}

export default MobileCategory
