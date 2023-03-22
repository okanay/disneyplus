import { configureStore } from '@reduxjs/toolkit'
import {dummyReducer} from "../slicer/dummySlicer";

export default configureStore({
    reducer: {
        dummy : dummyReducer
    },
})