import { useState, useEffect } from 'react';



//** Utilities Used by Variety Of functions That would be better be stored elsewhere */

//Utility function that when given a ref item determines if its in the viewport or not
export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => 
            setIntersecting(entry.isIntersecting)
        );

        // Start observing the element
        observer.observe(ref.current);

        // Cleanup the observer when the component unmounts or ref changes
        return () => {
            observer.disconnect();
        };

    }, [ref]);


    return isIntersecting;

}
