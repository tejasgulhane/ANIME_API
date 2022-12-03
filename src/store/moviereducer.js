import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice( {
    name:"Movie",
    initialState:{
        moviearr:  [],
        filtermoviearr:[],
        watchlistarr:[],
        ishomepage:true,
        showmovieinfocomponent:false
    },
    reducers:{
        setmoviesarray(state,action){
            state.moviearr = action.payload;
        },
        setfiltermoviearr(state,action){
            state.filtermoviearr = action.payload;
        },
        setshowmovieinfocomponent(state , action ) {
            state.showmovieinfocomponent=action.payload;
        },
        setwatchlistarr(state,action) {
            if(state.watchlistarr.some(p=>p.mal_id===action.payload.mal_id))
            {
                return
            }
            else {
                state.watchlistarr.push(action.payload)
            }
            
            localStorage.setItem("watchlist",JSON.stringify(state.watchlistarr));
        }
    }
})

export const movieactions = movieSlice.actions
export default movieSlice.reducer;