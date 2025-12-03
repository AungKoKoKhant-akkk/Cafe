import React from 'react'
import MenuData from '../data/MenuData';
import { useState } from 'react';

function ShowingMenu() {

    const [categories, setCategories] = useState('Coffee');
    const [selectedItem, setSelectedItem] = useState(null);

    const filterMenuItem = MenuData.filter(item => item.category === categories && item.popular === true);

    return (
        <div className='  p-4 mt-20 min-h-screen bg-base-300'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Menu</h1>
            {/* Tap Buttons */}
            <div className='  mb-8'>
                {/* Tap Buttons Inside Rounded box */}
                <div className='bg-gray-300 rounded-full max-w-2xl mx-auto  mb-8 p-1  '>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => setCategories('Coffee')}
                            className={`flex-1 py-3 px-6 rounded-full cursor-pointer font-medium transition-colors ${categories === 'Coffee'
                                ? 'bg-white shadow'
                                : 'bg-transparent text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Coffee
                        </button>
                        <button
                            onClick={() => setCategories('Food')}
                            className={`flex-1 py-3 px-6 rounded-full font-medium transition-colors cursor-pointer ${categories === 'Food'
                                ? 'bg-white  shadow'
                                : 'bg-transparent text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Food
                        </button>
                        <button
                            onClick={() => setCategories('Pastries')}
                            className={`flex-1 py-3 px-6 rounded-full cursor-pointer font-medium transition-colors ${categories === 'Pastries'
                                ? 'bg-white  shadow'
                                : 'bg-transparent text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Pastries
                        </button>
                    </div>
                </div>
            </div>

            {/* Card Grid */}
            <div className='grid grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto'>
                {filterMenuItem.slice(0, 4).map((item) => (
                    <div key={item.id} onClick={() => setSelectedItem(item)}
                        className='border p-4 rounded-lg shadow-2xl bg-base-100 border-none cursor-pointer transition-all hover:scale-105 '>
                        <h2 className='text-xl font-bold flex justify-between'>
                            {item.name} <span className='text-sm text-gray-500'>
                                {item.popular ? <span className='badge bg-gray-200'>Popular</span> : ''}</span>
                        </h2>
                        <p className='text-gray-600'>{item.description}</p>
                        <span className='text-lg font-semibold flex justify-end'>{item.price}</span>
                    </div>
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

        </div>


    )
}

export default ShowingMenu
