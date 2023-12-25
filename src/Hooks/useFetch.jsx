import React, { useContext } from 'react'
import { createClient } from "@sanity/client";
import CartContext from '../ContextProvider/CartContext';

const useCustomFetch = () => {
    const {setCategories} = useContext(CartContext);
    const client = createClient({
        projectId: "tbe7nf8h",
        dataset: "production",
        useCdn: false,
        apiVersion: "v2022-03-07",
        token: "skmVqPLTjbFiIvm5mHJOmVjOZPWt2UQ7G3ijS2qQHrYLZ0SH66WWa887r1lS8RRCRiGkB15MpHm8wHu0Bmyw8Gk7sLJGVHVIwzjSOOBqy56H5C2Id1w1yYwLPx7ovRexNIJrkk6P7Ge8cJzRkXBRDIuYjCaDFGr15wcb1cBEpSRvm3XzGqth"
      
      });

    const fetchData = async()=>{
        const data = await client.fetch("*[_type=='productdoc']");
        setCategories(data);
    }


    

}

export default useCustomFetch