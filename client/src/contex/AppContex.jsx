import { createContext } from "react";

const AppContext=createContext()
export const AppContextProvider=(props)=>{
    const value={

    }
    return (<AppContextProvider>
{props.children}
    </AppContextProvider>)
}