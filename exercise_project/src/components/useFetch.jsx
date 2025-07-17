import React, { useEffect, useState } from "react";

const useFetch = (URL)=> {

    const [data, setData]= useState(null);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);
    
    useEffect(()=>{
        async function fetchData() {
            setError(null)
            try {
                const response = await fetch(URL)
                if (!response.ok){
                    throw new Error('Internal Error');                    
                }
                const data = await response.json();
                setData(data);
                setLoading(false)
            } catch (error) {
                setError(error.message);
                console.error(error);
            }finally{
                setLoading(false);
            }
        }

        fetchData();

    },[]);

   return [data, loading, error]
    
}



export default useFetch