import React, {useState,createContext} from "react";

export const CaptainDataContext=createContext();

const CaptainContexts=({children})=>{

    const [captain ,setCaptain]=useState({
        email:"",
        fullName:{
            firstName:"",
            lastName:"",
        }
    });

    return(
        <>
            <CaptainDataContext.Provider value={{captain,setCaptain}}>
                {children}
            </CaptainDataContext.Provider>
        </>
    )
}
export default CaptainContexts