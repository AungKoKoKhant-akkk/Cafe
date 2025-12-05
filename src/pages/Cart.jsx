import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    // Mock data for design
    const mockCartItems = [
        {
            id: 1,
            name: 'Latte',
            category: 'Coffee',
            size: 'Large',
            price: 12.00,
            quantity: 1,
            image: '/src/assets/Coffee/Latte.avif',
            inStock: true
        },
        {
            id: 2,
            name: 'Croissant',
            category: 'Pastry',
            size: 'Regular',
            price: 5.00,
            quantity: 1,
            image: '/src/assets/Pastry/PlainCroissant.avif',
            inStock: true
        },
        {
            id: 3,
            name: 'Cappuccino',
            category: 'Coffee',
            size: 'Medium',
            price: 8.00,
            quantity: 1,
            image: '/src/assets/Coffee/Cappuccino.avif',
            inStock: false,
            shipsIn: '2-3 weeks'
        }
    ];

    const subtotal = mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingEstimate = 5.00;
    const taxEstimate = subtotal * 0.08; // 8% tax
    const orderTotal = subtotal + shippingEstimate + taxEstimate;

    return (
        <div className="max-w-7xl mx-auto p-4 mt-20 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT SIDE - Cart Items (2/3 width) */}
                <div className="lg:col-span-2 space-y-4">
                    {mockCartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="flex gap-6">
                                {/* Product Image */}
                                <div className="shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-lg bg-gray-100"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="grow">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                                                {item.category}: {item.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm mt-1">{item.size}</p>
                                            <p className="text-lg font-semibold mt-2">${item.price.toFixed(2)}</p>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            className="text-gray-400 hover:text-red-500 text-xl"
                                            aria-label="Remove item"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    {/* Stock Status */}
                                    <div className="mt-4">
                                        {item.inStock ? (
                                            <p className="text-green-600 text-sm flex items-center gap-1">
                                                ✓ In stock
                                            </p>
                                        ) : (
                                            <p className="text-orange-600 text-sm flex items-center gap-1">
                                                ⏱ Ships in {item.shipsIn}
                                            </p>
                                        )}
                                    </div>

                                    {/* Quantity Dropdown */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <label className="text-sm text-gray-600">Qty:</label>
                                        <select
                                            value={item.quantity}
                                            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE - Order Summary (1/3 width) */}
                <div className="lg:col-span-1">
                    <div className="bg-white border rounded-lg p-6 sticky top-24">
                        <h2 className="text-xl font-semibold mb-6">Order summary</h2>

                        {/* Summary Items */}
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-700">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between text-gray-700">
                                <div className="flex items-center gap-1">
                                    <span>Shipping estimate</span>
                                    <span className="text-gray-400 cursor-pointer">ⓘ</span>
                                </div>
                                <span>${shippingEstimate.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between text-gray-700">
                                <div className="flex items-center gap-1">
                                    <span>Tax estimate</span>
                                    <span className="text-gray-400 cursor-pointer">ⓘ</span>
                                </div>
                                <span>${taxEstimate.toFixed(2)}</span>
                            </div>

                            <div className="border-t pt-3 mt-3">
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Order total</span>
                                    <span>${orderTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                            Checkout
                        </button>
                        <Link to="/menu" className="block mt-3">
                            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-lg transition-colors">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Empty Cart Message (commented for now) */}
            {mockCartItems.length === 0 && (
                <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</p>
                    <p className="text-gray-500 mb-6">Add some delicious items to get started!</p>
                    <Link to="/menu">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Browse Menu
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;