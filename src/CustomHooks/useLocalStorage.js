import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Step 1: Initialize state with value from localStorage (or use initialValue)
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from localStorage
            const item = window.localStorage.getItem(key);
            // Parse stored json or return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    // Step 2: Save to localStorage whenever storedValue changes
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error();
        }
    }, [key, storedValue]);

    // Step 3: Return the value and setter (just like useState!)
    return [storedValue, setStoredValue];
}

export default useLocalStorage;