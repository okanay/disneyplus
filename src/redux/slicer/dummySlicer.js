import {createSlice} from '@reduxjs/toolkit'

export const dummyReducer = createSlice({
    name: 'dummy',
    initialState: {
        value:  {
            dummyValue1 : "I'am dummy value!"
        }
    },
    reducers: {
        setDummy : (state, action) => {
            state.value = action.payload
        },
    },
})

export const {setDummy} = dummyReducer.actions

export default dummyReducer.reducer