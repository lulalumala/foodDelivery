import { createContext, useContext, useState } from "react";

export const Context=createContext()

const StateArea = ({ children }) => {
    const [newCategory, setNewCategory] = useState(null)
    
    return (
        <Context.Provider value={{category:[newCategory, setNewCategory]}} >
            {children}
        </Context.Provider>
    )
}
export default StateArea
