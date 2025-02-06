import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../api/functions/fetchProducts"
import { fetchSingleProduct } from "../api/functions/fetchSingleProduct"



export const useFetchProductsQuery=()=>{
    return useQuery({
        queryKey:["products"],
        queryFn:fetchProducts
    })
}

export const useFetchSingleProductQuery=(id)=>{
    return useQuery({
        queryKey:["product",id],
        queryFn:()=>fetchSingleProduct(id)

    })
}