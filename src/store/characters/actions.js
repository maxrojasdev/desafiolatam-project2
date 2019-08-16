import { 
    GET_CHARACTERS_INIT, 
    GET_CHARACTERS_SUCCESS, 
    GET_CHARACTERS_ERROR, 
    GET_CHARACTER_INIT, 
    GET_CHARACTER_SUCCESS, 
    GET_CHARACTER_ERROR } from "./const";
import { getCharacters, getCharacter} from "./server";

export const getCharatersAction = url => {
    return dispatch => {
        dispatch({type: GET_CHARACTERS_INIT});
        getCharacters(url).then(response => {
            dispatch({type: GET_CHARACTERS_SUCCESS, payload: response.data})
        }).catch(() => {
            dispatch({type: GET_CHARACTERS_ERROR})
        })
    }
}

export const getCharaterAction = url => {
    return dispatch => {
        dispatch({type: GET_CHARACTER_INIT});
        getCharacter(url).then(response => {
            dispatch({type: GET_CHARACTER_SUCCESS, payload: response.data})
        }).catch(() => {
            dispatch({type: GET_CHARACTER_ERROR})
        })
    }
}