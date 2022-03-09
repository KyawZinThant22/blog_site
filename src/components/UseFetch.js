import { useEffect, useState } from "react";

const UseFetch = (url) => {
      
        const [data , setData ] = useState(null)
        const [isLoading , setIsLoading] = useState(true)
        const [error , setError] = useState(null)


        useEffect(() => {

            const abortCont = new AbortController();

            
                fetch(url , {signal : abortCont.signal})
            .then((res) => {
        
                if(!res.ok){
                    throw Error ('Could not fetch the data from the resource')
                }
        
                return res.json()
            } )
            .then(data  => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((err) => {

               if(err.name === 'AbortError'){
                    // console.log('fetch');
               }else{
                    setIsLoading(false)
                    setError(err.message)
               }
            })





            return () => abortCont.abort();
          }, [])

     return {data , isLoading , error} 


}
 
export default UseFetch;