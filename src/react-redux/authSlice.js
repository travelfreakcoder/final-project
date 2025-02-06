import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login:(state)=>{
        toast.success("User logged in successfully")
        state.isLoggedIn=true
    },
    logout:(state)=>{
        toast.success("User logged out successfully")
        state.isLoggedIn=false
    }
  },
})

// Action creators are generated for each case reducer function
export const { login,logout } = authSlice.actions

export default authSlice.reducer