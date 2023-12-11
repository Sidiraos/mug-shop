import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './slices/products';
import cart from './slices/cart';
const store = configureStore({
    reducer: {
        products : productsSlice,
        cart
    },
    devTools: true
})

export default store