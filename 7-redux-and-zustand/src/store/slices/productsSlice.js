import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import products from "../../shopping/data/products";
import axios from "axios";

const initialState = {
    status: "Idle",
    items: []
}

export const fetchProducts = createAsyncThunk(
    "productsSlice/fetchProducts",
    async (args, thunkAPI) => {
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        // thunkAPI.dispatch(initProducts);
        return products;
    })

const productsSlice = createSlice(
    {
        name: "productsSlice",
        initialState,
        reducers: {
            initProducts(state, action) {
                console.log(action.payload)
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "Fulfilled";
            }).addCase(fetchProducts.pending, (state, action) => {
                state.status = "Loading";
            })
        }
    }
);

export const { initProducts } = productsSlice.actions;

export default productsSlice.reducer;