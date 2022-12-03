import { configureStore } from "@reduxjs/toolkit";
import moviereducer from "./moviereducer";

const store = configureStore({
        reducer : {
            movie:moviereducer,
        }}
)

export default store;