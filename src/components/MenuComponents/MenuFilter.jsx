import React from 'react'

function MenuFilter({ categories, setCategories, searchMenuItems, setSearchMenuItems }) {
    return (
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
    )
}

export default MenuFilter
