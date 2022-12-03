import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice( {
    name:"Movie",
    initialState:{
        moviearr:  [],
        filtermoviearr:[],
        ishomepage:true,
        showmovieinfocomponent:false
    },
    reducers:{
        setmoviesarray(state,action){
            state.moviearr = action.payload;
        },
        setfiltermoviearr(state,action){
            state.moviearr = action.payload;
        },
        setshowmovieinfocomponent(state , action ) {
            state.showmovieinfocomponent=action.payload;
        },
        
    }
})

export const movieactions = movieSlice.actions
export default movieSlice.reducer;