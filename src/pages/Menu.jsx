import React from 'react'
import MenuData from '../data/MenuData.js';

function Menu() {
    const firstItem = MenuData[0];
    return (
        <div className='max-w-6xl mx-auto p-4 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 '>
            <div className="card card-side bg-base-100 shadow-2xl ">
                <figure>
                    <img
                        src={firstItem.image}
                        alt={firstItem.name}
                        className='w-32 h-auto object-cover' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstItem.name}</h2>
                    <p>{firstItem.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>


            <div className="card lg:card-side bg-base-100 shadow-sm ">
                <figure>
                    <img
                        src={firstItem.image}
                        alt={firstItem.name}
                        className='w-32 h-auto object-cover' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstItem.name}</h2>
                    <p>{firstItem.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
