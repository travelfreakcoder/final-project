import { axiosInstance } from "../axiosInstance/axiosInstance"
import { endPoints } from "../endPoints/endPoints"


export const fetchProducts=async()=>{
    try{
        const {data}=await axiosInstance.get(endPoints.products)
        return data

    }
    catch(error){
        console.log(error)
    }   
}