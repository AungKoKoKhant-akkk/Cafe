import React from 'react'

function ShowingMenuButton({ setCategories, categories }) {
    return (
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
    )
}

export default ShowingMenuButton;
