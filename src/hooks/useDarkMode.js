import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode(key, initialValue) {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue)
    useEffect(() => {
        //check to see if the value from `useLocalStorage` is true or false
        //If it's true, add the class `dark-mode` to the `body` element
        //If it's false, remove the class from the `body` element.
        
      });
}
