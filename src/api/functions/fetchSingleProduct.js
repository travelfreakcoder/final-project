import { axiosInstance } from "../axiosInstance/axiosInstance"
import { endPoints } from "../endPoints/endPoints"



export const fetchSingleProduct = async (id) => {
    try{
        const {data}=await axiosInstance.get(endPoints.getSingleProduct(id))
        return data

    }
    catch(error){
        console.log(error)
    }
}