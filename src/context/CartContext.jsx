import React, { createContext, useContext } from 'react';
import useLocalStorage from '../CustomHooks/useLocalStorage';
import { toast } from 'react-toastify';

// 1. Create the context
const CartContext = createContext();

// 2. Create a custom hook to use the cart
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// 3. Create the Provider component
export const CartProvider = ({ children }) => {
    // Store cart items in localStorage (persists after refresh)
    const [cartItems, setCartItems] = useLocalStorage('cartItems', []);

    // Function to add item to cart
    const addToCart = (item) => {
        setCartItems(prevItems => {
            // Check if item already exists
            const existingIndex = prevItems.findIndex(
                cartItem => cartItem.id === item.id
            );

            if (existingIndex > -1) {
                // Item exists - increase quantity
                const updatedItems = [...prevItems];
                updatedItems[existingIndex].quantity += 1;
                toast.success(`${item.name} quantity updated!`, {
                    position: "bottom-right"
                });
                return updatedItems;
            } else {
                // New item - add to cart
                const newItem = {
                    id: item.id,
                    name: item.name,
                    category: item.category,
                    price: parseFloat(item.price.replace('$', '')),
                    image: item.image,
                    quantity: 1
                };
                toast.success(`${item.name} added to cart! 🎉`, {
                    position: "bottom-right"
                });
                return [...prevItems, newItem];
            }
        });
    };

    // Function to remove item from cart
    const removeFromCart = (id) => {
        setCartItems(prevItems => 
            prevItems.filter(item => item.id !== id)
        );
        toast.info('Item removed from cart');
    };

    // Function to update quantity
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    // Function to clear entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Function to calculate totals
    const getCartTotal = () => {
        const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shippingEstimate = cartItems.length > 0 ? 5.00 : 0;
        const taxEstimate = subtotal * 0.08;
        const orderTotal = subtotal + shippingEstimate + taxEstimate;

        return {
            subtotal,
            shippingEstimate,
            taxEstimate,
            orderTotal,
            itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
        };
    };

    // All functions and data we want to share
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};