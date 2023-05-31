import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
  const getStoredValue = () => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};