import React, { useCallback } from 'react';
import MenuData from '../data/MenuData';
import { useState, useEffect, useMemo } from 'react';
import ShowingMenuButton from '../components/ShowingMenuComponents/ShowingMenuButton';
import PopularMenuCard from '../components/ShowingMenuComponents/PopularMenuCard';
import { Link } from 'react-router-dom'

function ShowingMenu() {

    const [categories, setCategories] = useState('Coffee');
    const [selectedItem, setSelectedItem] = useState(null);


    const filterMenuItem = useMemo(() => {
        return MenuData.filter(item => item.category === categories && item.popular === true);
    }, [categories]);

    useEffect(() => {
        setSelectedItem(null);
    }, [categories]);

    const handleItemClick = useCallback((item) => {
        setSelectedItem(item);
    }, []);


    return (
        <div className='  p-4 mt-20 min-h-screen bg-base-300'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Menu</h1>
            {/* Tap Buttons */}
            <ShowingMenuButton categories={categories} setCategories={setCategories} />



            {/* Card Grid */}
            <div className='grid grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto'>
                {filterMenuItem.slice(0, 4).map((item) => (
                    <PopularMenuCard key={item.id} item={item} onClick={() => handleItemClick(item)} />
                ))}
            </div>

            {/* Featured Image */}
            {/* Featured Image - Shows clicked item */}
            {selectedItem ? (
                <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={selectedItem.image}
                            alt={selectedItem.name}
                            className="w-full h-64 object-cover"
                        />

                    </div>
                </div>
            ) : filterMenuItem.length > 0 ? (
                <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={filterMenuItem[0].image}
                            alt={filterMenuItem[0].name}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </div>
            ) : null}

            <div className='text-center '>
                <Link to="/menu" className="btn btn-primary mt-4 btn-outline hover:bg-primary">View Full Menu</Link>
            </div>

        </div>


    )
}

export default ShowingMenu
