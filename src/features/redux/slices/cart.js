import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [] ,
    totalPrice : 0,
    opened : false,
}
const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        } ,
        isOpened : (state) => {
            state.opened = ! state.opened
        },
        setQty : (state , action) => {
            state.items.find(item => item.id === action.payload.id).qty = action.payload.qty
            state.items.find(item => item.id === action.payload.id).totalItemPrice = action.payload.price * action.payload.qty
        },
        removeItemFromCart : (state , action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export default cart.reducer;
export const {addItem , isOpened , setQty , removeItemFromCart} = cart.actions;