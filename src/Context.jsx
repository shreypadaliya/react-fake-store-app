import React, { createContext, useState,useEffect } from "react";

export const ProductContext = createContext();

const ContextProvider = ({children}) => {

const [products,setProducts]=useState([]);

const API_URL = 'https://fakestoreapi.com/products';

const getProduct = async(url) =>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data); 
        console.log(data)

    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    getProduct(API_URL)
},[])

return (
<>
 <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
</>
)
};

export default ContextProvider;
