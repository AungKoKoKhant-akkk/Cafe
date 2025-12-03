import React from 'react'

function PopularMenuCard({ item, onClick }) {
    return (
        <div onClick={onClick}
            className='border p-4 rounded-lg shadow-2xl bg-base-100 border-none cursor-pointer transition-all hover:scale-105 '>
            <h2 className='text-xl font-bold flex justify-between'>
                {item.name} <span className='text-sm text-gray-500'>
                    {item.popular ? <span className='badge bg-gray-200'>Popular</span> : ''}</span>
            </h2>
            <p className='text-gray-600'>{item.description}</p>
            <span className='text-lg font-semibold flex justify-end'>{item.price}</span>
        </div>
    )
}

export default PopularMenuCard
