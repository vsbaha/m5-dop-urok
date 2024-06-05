import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchGoods= createAsyncThunk(
    'goods/fetchGoods',
    async () =>{
        const response= await axios.get('https://dummyjson.com/products?limit=15')
        return response.data
    }
)


const goodsSlice= createSlice(
    {
        name:'goods',
        initialState:{
            goods:[],
            counter:0
        },
        reducers:{
            increaseCounter:(state) =>{
                state.counter++
            }
        },
        extraReducers:(builder) =>{
            builder
                .addCase(fetchGoods.fulfilled, (state, action) =>{
                    state.goods=action.payload.products
                })
        }
    }
)
export const goodsReducer= goodsSlice.reducer
export const {increaseCounter} =goodsSlice.actions