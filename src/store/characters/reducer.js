import { initialState } from "./initialState";
import { GET_CHARACTERS_INIT,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    GET_CHARACTER_INIT,
    GET_CHARACTER_SUCCESS,
    GET_CHARACTER_ERROR } from "./const";

export default function (state = initialState, action){
    switch(action.type) {
        // Reducer de los Characters en plural
        case GET_CHARACTERS_INIT: {
            return {
                ...state,
                charactersLoading: true
            }
        }
        case GET_CHARACTERS_SUCCESS: {
            return {
                ...state,
                characters: action.payload,
                charactersLoading: false,
                charactersError: false
            }
        }
        case GET_CHARACTERS_ERROR: {
            return {
                ...state,
                characters: state.characters,
                charactersLoading: false,
                charactersError: true
            }
        }

        // Reducer de los Characters en singular
        case GET_CHARACTER_INIT: {
            return {
                ...state,
                charactersLoading: true
            }
        }
        case GET_CHARACTER_SUCCESS: {
            return {
                ...state,
                characters: action.payload,
                charactersLoading: false,
                charactersError: false
            }
        }
        case GET_CHARACTER_ERROR: {
            return {
                ...state,
                characters: state.characters,
                charactersLoading: false,
                charactersError: true
            }
        }
        default: {
            return {
                state
            }
        }
    }
}