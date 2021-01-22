import { FETCH_SMURF_DATA_FAILURE, 
    FETCH_SMURF_DATA_START, 
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_ADD } from "../actions";

export const initialState = {
    smurfs: [],
    isLoading: false,
    error:''
}

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_SMURF_DATA_START:
            return{
                ...state,
                isLoading:true,
                smurfs:action.payload,
                error:''
            }
        case FETCH_SMURF_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                smurfs: action.payload,
            }
        case FETCH_SMURF_DATA_FAILURE:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        case FETCH_SMURF_DATA_ADD:
            const newSmurf = {
                name:'',
                 position:'',
                 nickname: '',
                 description:''
            }
            return{
                ...state,
                isloading:false,
                smurfs:[...state.smurfs, newSmurf]
            }
            default: return(state)       
    }
    
}

export default reducer;
//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary