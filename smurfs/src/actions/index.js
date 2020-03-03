import axios from "axios"

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchSmurfs = () => dispatch => {

    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err })
        })
}

export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";
export const postSmurfs = (smurfs) => dispatch => {
    dispatch({ type: POST_DATA })

    axios
        .post(`http://localhost:3333/smurfs`, smurfs)
        .then(res => {
            console.log(res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: POST_FAIL, payload: err.response })
        })
}

export const PUT_DATA = "PUT_DATA";
export const PUT_SUCCESS = "PUT_SUCCESS";
export const PUT_FAIL = "PUT_FAIL";
export const putSmurfs = smurfs => dispatch => {
    dispatch({ type: PUT_DATA })

    axios
        .put(`http://localhost:3333/smurfs/1`, smurfs)
        .then(res => {
            console.log(res.data);
            dispatch({ type: PUT_SUCCESS, payload: res })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: PUT_FAIL, payload: err.response })
        })
}