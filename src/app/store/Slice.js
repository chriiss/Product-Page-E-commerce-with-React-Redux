import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    navOpen: false,
    cart: [],
    qty: 1,
    carouselOpen: false,
    current: 0
}

const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState,
    reducers: {
        addNavOpen(state, action) {
            state.navOpen = action.payload;
        },
        addCart(state, action) {
            state.cart = action.payload;
        },
        increment: (state) => {
            state.qty += 1
        },
        decrement: (state) => {
            state.qty -= 1
        },
        addQtyIncrement: (state, action) => {
            state.qty += action.payload
        },
        addCarouselOpen(state, action) {
            state.carouselOpen = action.payload;
        },
        addCarouselMobile(state, action) {
            state.current = action.payload;
        }
    }
})




export const { addNavOpen, addAnchorEl, addCart, increment, decrement, addQtyIncrement, addCarouselOpen, addCarouselMobile } = sneakersSlice.actions;
export const getNavOpen = (state) => state.navOpen.navOpen;
export const getAnchorEl = (state) => state.anchor.anchor;
export const getCart = (state) => state.cart.cart;
export const getQty = (state) => state.qty.qty;
export const getCarouselOpen = (state) => state.carouselOpen.carouselOpen;
export const getCarouselMobile = (state) => state.current.current;
export default sneakersSlice.reducer;