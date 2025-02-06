import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[] ,
  },
  reducers: {
    addToCart:(state,action)=>{
        toast.success("Item added to cart")
        const existingCartProduct=state.cart.find((item)=>item.id===action.payload.id)
        if(existingCartProduct){
            state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
        }
        else{
            state.cart=[...state.cart,{...action.payload,qty:1}]
        }
    },
    removeFromCart:(state,action)=>{
        toast.success("Item removed from cart")
        state.cart=state.cart.filter((item)=>item.id!=action.payload)
    },
    increaseQty:(state,action)=>{
        state.cart=state.cart.map((item)=>item.id===action.payload?{...item,qty:item.qty+1}:item)
    },
    decreaseQty:(state,action)=>{
       state.cart= state.cart.map((item)=>item.id===action.payload?{...item,qty:Math.max(item.qty-1,1)}:item)
    }

  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,increaseQty,decreaseQty } = cartSlice.actions

export default cartSlice.reducer