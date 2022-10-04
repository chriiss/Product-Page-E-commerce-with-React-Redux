import {configureStore} from '@reduxjs/toolkit';
import sneakersReducer from './Slice';

export const store = configureStore({
    reducer: {
        navOpen: sneakersReducer,
        cart: sneakersReducer,
        qty: sneakersReducer,
        carouselOpen: sneakersReducer,
        current: sneakersReducer
    }
})