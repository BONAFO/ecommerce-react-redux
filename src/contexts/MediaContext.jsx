import { createContext, useContext, useEffect, useState } from "react";

const MediaContext = createContext();
export const useMedia = () => useContext(MediaContext)




export default function MediaProvider({ children }) {
    const [isMobile, useMobile] = useState(window.innerHeight > window.innerWidth);

    window.onresize = () => {
        useMobile(window.innerHeight > window.innerWidth)
    }


    return <MediaContext.Provider value={{
        isMobile
    }}>
        {children}
    </MediaContext.Provider>
}