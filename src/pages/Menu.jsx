import React, { useState, useMemo, useCallback } from 'react'
import MenuData from '../data/MenuData.js';
import MenuCard from '../components/MenuComponents/MenuCard.jsx';
import MenuFilter from '../components/MenuComponents/MenuFilter.jsx';
import useLocalStorage from '../CustomHooks/useLocalStorage.js';
import useDebounce from '../CustomHooks/useDebounce.js';

function Menu() {
    const [categories, setCategories] = useLocalStorage('lastCategory', 'All')
    const [searchMenuItems, setSearchMenuItems] = useState('')
    const debouncedSearch = useDebounce(searchMenuItems, 500);

    // const filterMenuItem = MenuData.filter(item => {
    //     const categoryMatch = categories === 'All' || item.category === categories
    //     const searchMatch = item.name.toLowerCase().includes(searchMenuItems.toLowerCase())
    //     return categoryMatch && searchMatch
    // })

    const filterMenuItem = useMemo(() => {
        return MenuData.filter(item => {
            const categoryMatch = categories === 'All' || item.category === categories
            const searchMatch = item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
            return categoryMatch && searchMatch
        })
    }, [categories, debouncedSearch]);



    const handleCategoryChange = useCallback((newCategory) => {
        setCategories(newCategory);
    }, []);

    const handleSearchChange = useCallback((newSearch) => {
        setSearchMenuItems(newSearch);
    }, []);


    return (
        <div className="max-w-6xl mx-auto p-4 mt-20">
            {/* Filter Controls */}
            <MenuFilter
                categories={categories}
                setCategories={handleCategoryChange}
                searchMenuItems={searchMenuItems}
                setSearchMenuItems={handleSearchChange}
            />


            {/* Heading */}
            <div className='max-w-6xl mx-auto p-4 mt-8 text-center'>
                <h2 className='text-2xl font-bold mb-4'>
                    {categories} Menu
                </h2>
            </div>
            {/* Card Grid */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>


                {filterMenuItem.map((item) => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>
        </div>



    )
}

export default Menu
