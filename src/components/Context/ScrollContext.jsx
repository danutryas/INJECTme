import { createContext,useState,useEffect } from "react";

const ScrollContext = createContext({});

export function ScrollProvider({children}){
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);


    return(
        <ScrollContext.Provider value={{scrollPosition}}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollContext