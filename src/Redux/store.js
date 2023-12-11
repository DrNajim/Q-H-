import {configureStore} from '@reduxjs/toolkit'
import PostlistsReducer from "./Reducer/Postlists"  

const Store = configureStore({
    reducer: {
        Postlists: PostlistsReducer,
    }
})
export default Store