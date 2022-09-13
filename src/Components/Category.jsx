import React, { useState } from 'react'
import {categories} from '../assets/data/data'

const Category = () => {
const [Category ,setCategory] = useState(categories)

  return (
    <div className=' max-w-[1640px] px-4 py-14 mx-auto'>
      <h1 className=' text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

      <div className=' grid grid-cols-2 md:grid-cols-4 gap-6'>
        {categories.map((item) =>{
    return <div key={item.id} className=' rounded-lg bg-gray-100 flex justify-between items-center '>
            <p className=' font-bold sm:text-xl ml-4'>{item.name}</p>
            <img className='w-14' src={item.image} alt="" />
          </div>
        } )}
      </div>
    </div>
  )
}

export default Category