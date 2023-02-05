import {FaBars, FaTimes} from 'react-icons/fa';
import { BiSort, BiChevronDown } from 'react-icons/bi';
import { useState } from 'react'
import MobileCategory from './MobileCategory';

function SortMenu() {
    const [menuBar, setMenuBar]= useState(false);
  return (
    <div className='w-full max-w-[1290px] mx-auto flex justify-between mt-[68px] mb-[59px]'>
        <div>Photography / <span className="text-slate-400">Premium Photos</span></div>
        <div className='flex flex-col'>
            <div className='block self-end md:hidden' onClick={() => {setMenuBar(!menuBar)}}>
                {menuBar ? <FaTimes /> : 
                    <FaBars style={{with: '30px', height: '15px', border: '1px solid black'}}/>
                }
            </div>
            {menuBar && <MobileCategory/>}
        </div>
        <div  className="hidden md:flex h-[24px] flex-end">
            <div className='flex text-slate-400 text-sm text-base mr-3'><BiSort className='mt-1'/> Sort By</div>
            <div> Price
                <div className="dropdown dropdown-left dropdown-end ml-2">
                    <label tabIndex={0}><BiChevronDown /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='#item'>Item 1</a></li>
                        <li><a href='#item'>Item 2</a></li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  )
}

export default SortMenu
