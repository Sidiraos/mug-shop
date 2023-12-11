import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products : null,
    loading :false,
    error : null
}

 const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        addProducts : (state, action) => {
            state.products = action.payload
        } ,
        isLoading : (state, action) => {
            state.loading = action.payload
        },
        setError : (state, action) => {
            state.error = action.payload
        } ,
        isPicked : (state, action) => {
            state.products.find(product => product.id === action.payload.id).picked = action.payload.picked
        }
    }
})
export const getInventoryData = (action)=>{
    return (dispatch , getState) =>{
        dispatch(isLoading(true))
        fetch('/mug-shop/data/inventory.json')
        .then(res => res.json())
        .then(data => {
            dispatch(isLoading(false))
            dispatch(setError(null))
            dispatch(addProducts(data.products))
        })
        .catch(err => {
            dispatch(isLoading(false))
            dispatch(setError(err.message))
        })
    }
}
export const {addProducts , isLoading , setError , isPicked} = productsSlice.actions;
export default productsSlice.reducer;