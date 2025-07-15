import React, { useEffect, useState } from "react";

const useFetch = (url)=> {

    const [data, setData]= useState(null);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);
    
    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(url)
                if (!response.ok){
                    throw new Error('Internal Error');                    
                }
                const data = await response.json();
                setData(data);
                setLoading(false)
            } catch (error) {
                setError(error.message);
                setLoading(false);
                console.error(error);
            }
        }

        fetchData();

    },[]);

    if (loading) return(
        <><p>Loading...</p></>
    )
    if (error) return (
        <><p>{error}</p></>
    )
    
}

return (
    <>
    
    </>
)

export default useFetch