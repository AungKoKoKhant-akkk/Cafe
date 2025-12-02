import React, { useState } from 'react'
import MenuData from '../data/MenuData.js';

function Menu() {
    const [categories, setCategories] = useState('All')
    const [searchMenuItems, setSearchMenuItems] = useState('')

    const filterMenuItem = MenuData.filter(item => {
        const categoryMatch = categories === 'All' || item.category === categories
        const searchMatch = item.name.toLowerCase().includes(searchMenuItems.toLowerCase())
        return categoryMatch && searchMatch
    })
    return (
        <div className="max-w-6xl mx-auto p-4 mt-20">
            {/* Filter Controls */}
            <div className="flex flex-row justify-center items-center gap-4 mb-8">
                {/* Search Item */}
                <input
                    type="text"
                    placeholder="Search Menu Items"
                    value={searchMenuItems}
                    onChange={(e) => setSearchMenuItems(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />

                {/* Category Select */}
                <select
                    name="categories"
                    id="categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                    className='select select-bordered w-full max-w-xs'
                >
                    <option value="All">ALL</option>
                    <option value="Coffee">COFFEE</option>
                    <option value="Food">FOOD</option>
                    <option value="Pastries">DESSERTS</option>
                </select>
            </div>

            {/* Card Grid */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {filterMenuItem.map((item) => (
                    <div key={item.id} className="card bg-base-100 shadow-sm">
                        <figure className="h-48 w-full overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-full object-cover' />
                        </figure>
                        <div className="card-body">
                            <div className="flex justify-between items-start">
                                <h2 className="card-title">{item.name}</h2>
                                {item.popular && <span className="badge badge-secondary">Popular</span>}
                            </div>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <div className="card-actions justify-between items-center mt-4">
                                <span className="text-xl font-bold text-primary">{item.price}</span>
                                <button className="btn btn-primary btn-sm">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}

export default Menu
