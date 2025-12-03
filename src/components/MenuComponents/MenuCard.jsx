import React from 'react'

function MenuCard({ item }) {
    return (
        <div className="card bg-base-100 shadow-sm">
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
    )
}

export default MenuCard
