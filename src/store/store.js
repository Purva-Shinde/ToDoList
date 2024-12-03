import { configureStore } from '@reduxjs/toolkit';
 import todoSlice from '../slice/todoSlice'


const store =configureStore({
reducer:{
    Todos:todoSlice
}

})
export default store;