import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        storeAddToCart: (state, action) => {
            // state.value += action.payload;
            const productId = action.payload;
            const product = state.find(item => item.id === productId.id);
            if (product) {
                product.quantity += 1;
            } else {
                state.push(action.payload)
            }

            // localStorage.setItem("cartproducts", JSON.stringify(state));
        },
        storeRemoveProduct: (state, action) => {
            // for (var i = 0; i < state.length; i++) {
            //     var product = state[i];
            //     if (product.id === action.payload) {
            //         state.splice(i, 1);
            //     }
            // }
            // //Call API
            // localStorage.setItem("cartproducts", JSON.stringify(state));
            return state.filter((item) => item.id !== action.payload)

        },
        incrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.id === productId);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.id === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        }

    },
})

// Action creators are generated for each case reducer function
export const { storeAddToCart, storeRemoveProduct, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer