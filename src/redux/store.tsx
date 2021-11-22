import { configureStore } from '@reduxjs/toolkit'
import value from './slice/sliceSwitch'

export default configureStore({
    reducer: {
        value
    }
})