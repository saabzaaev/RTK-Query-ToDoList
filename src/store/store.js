import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "../reducer/todoSlice/todoSlice";


export const store = configureStore(
    {
        reducer: 
        {
            [TodoSlice.reducerPath] : TodoSlice.reducer
        },
        middleware: (getDefaultMiddlewate) => getDefaultMiddlewate().concat(TodoSlice.middleware)
    }
)