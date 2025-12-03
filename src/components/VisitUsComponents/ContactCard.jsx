import React from 'react'

function ContactCard({ icon, title, children }) {
    return (
        <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body items-center text-center">
                <div className="bg-yellow-100 rounded-full p-6 mb-4">
                    {icon}  {/* ← Use the icon prop here */}
                </div>
                <h2 className="card-title text-2xl font-bold text-gray-800">{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default ContactCard
