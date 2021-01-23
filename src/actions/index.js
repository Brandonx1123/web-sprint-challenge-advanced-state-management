import axios from 'axios';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START'
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS'
export const FETCH_SMURF_DATA_FAILURE='FETCH_SMURF_DATA_FAILURE'
export const FETCH_SMURF_DATA_ADD='FETCH_SMURF_DATA_ADD' 

//POST UNDER, FETCH(GET) ABOVE

export const POST_SMURF_DATA_START='POST_SMURF_DATA_START'  
export const POST_SMURF_DATA_SUCCESS='POST_SMURF_DATA_SUCEESS'  
export const POST_SMURF_DATA_FAILURE='POST_SMURF_DATA_FAILURE'


export const fetchSmurf = () => dispatch => {
    dispatch({type:FETCH_SMURF_DATA_START})
    axios.get('http://localhost:3333/smurfs')
    .then((res) =>{
        console.log("smurfData", res)
        dispatch({type:FETCH_SMURF_DATA_SUCCESS, payload: res.data})
    })
    .catch ((err) => {
        console.log("Smurfs are in Trouble..HELP", err) 
        dispatch({type: FETCH_SMURF_DATA_FAILURE, payload:err.message})
    })
}


export const postSmurf = (newSmurf) => dispatch => {
    dispatch({type:POST_SMURF_DATA_START})
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then((res) => {
        console.log('NEW SMURF', res)
        dispatch({type:POST_SMURF_DATA_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        console.log('New Smurf Got into accident')
        dispatch({type: POST_SMURF_DATA_FAILURE, payload:err.message})
    })
}







//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.