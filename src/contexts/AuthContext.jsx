import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {

    const [token, setToken] = useState({ lv: 0}); 

    return <AuthContext.Provider value={{
        token, setToken
    }}>
        {children}
    </AuthContext.Provider>
}